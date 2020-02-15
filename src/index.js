'use strict';
/*global __dirname*/

const DIR_PATH_IN = `${__dirname}/inputAudio/`; 
const DIR_PATH_OUT = `${__dirname}/outputAudio/`;
const { getListFiles } = require('./workWithFiles');
const { createEncoder } = require('./convertMP3');
const { multibar } = require('./bar');
const { numberFileInOneIterration } = require('./settings');

getListFiles(DIR_PATH_IN)
  .then(async files => {
    const allPromises = [];
    const step = numberFileInOneIterration === 0 
      ? files.length 
      : numberFileInOneIterration;
    let iterration = 1;  
    if(numberFileInOneIterration > 0 && numberFileInOneIterration < files.length) {
      console.log(`Enabled quantity files by one iteration: ${numberFileInOneIterration}`);
      console.log(`Quantity mp3-files (${files.length}) more than ${numberFileInOneIterration}`);
      console.log(`It will be ${Math.ceil(files.length / numberFileInOneIterration)} iterrations`)
    }

    for(let i = 0; i < files.length; i += step){

      if(numberFileInOneIterration > 0 && numberFileInOneIterration < files.length) {
        console.log(`\nIterration ${iterration}:`);
      }

      files.slice(i, i + step).map(file => {
        const encodeFile = createEncoder(`${DIR_PATH_IN}${file}`, `${DIR_PATH_OUT}${file}`);
        const emitter = encodeFile.getEmitter(); 
        const barProgress = multibar.create(100, 0);
        
        emitter.on('progress', ([progress]) => {
          barProgress.update(progress, {filename: file});
        });

        allPromises.push(
          encodeFile
            .encode()
            .catch(err => console.error(`Error encode: ${err}`))
        );
      });

      await Promise.all([...allPromises]);

      iterration++;
    }
  })
  .then(() => multibar.stop())
  .then(() => console.log('Complete!'))
  .catch(err => console.error(err));
