//settings for Lame librarry
exports.settingsMP3 = {
  output: '',
  bitrate: 128,
  quality: 0,
  meta: {
    artist: '',
    album: '',
    title: ''
  }
};

//setting for multibar librarry
exports.settingsBars = {
  format: '[{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {filename}',
  hideCursor: true
};

//number file procces at once
exports.numberFileInOneIterration = 5;
