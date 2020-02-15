'use strict';

const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

exports.getListFiles = async (path) => {
  const result = await readdir(path);

  return result.filter(file => file.endsWith('.mp3'));
};
