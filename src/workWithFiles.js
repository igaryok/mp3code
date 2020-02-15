'use strict';

const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

exports.getListFiles = async (path) => {
  //read list of files from path and return array file-names wich finish .mp3
  const result = await readdir(path);

  return result.filter(file => file.endsWith('.mp3'));
};
