'use strict';

const Lame = require("node-lame").Lame;
const { settingsMP3 } = require('./settings');

exports.createEncoder = (pathIn, pathOut) => {
  settingsMP3.output = pathOut;

  return new Lame(settingsMP3).setFile(pathIn);
};
