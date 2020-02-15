const cliProgress = require('cli-progress');

const { settingsBars } = require('./settings');

//new object multibar
const multibar = new cliProgress.MultiBar(settingsBars);

exports.multibar = multibar;
