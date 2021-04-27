const del = require('del');

module.exports = function clean(cb) {
  return del(['build/**', 'CSXS'], {force: true}).then(() => {
    cb();
  });
};
