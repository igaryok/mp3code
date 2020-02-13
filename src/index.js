'use strict';

const Lame = require("node-lame").Lame;
const cliProgress = require('cli-progress');
 
const encoder = new Lame({
    output: './src/outputAudio/02_02_03.mp3',
    bitrate: 128,
    quality: 0,
    meta: {
      artist: '',
      album: '',
      title: ''
    }
}).setFile('./src/inputAudio/02_02_03.mp3');
const barEncoder = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const emitter = encoder.getEmitter();

barEncoder.start(100, 0); 
emitter.on("progress", ([progress, eta]) => {
  barEncoder.update(progress);
});

encoder
    .encode()
    .then(() => {
      barEncoder.stop();
      console.log('Complete!');
    })
    .catch(error => {
        console.error(error);
    });

