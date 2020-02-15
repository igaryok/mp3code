const cliProgress = require('cli-progress');

const { settingsBars } = require('./settings');

const multibar = new cliProgress.MultiBar(settingsBars);

exports.multibar = multibar;
