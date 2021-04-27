const gulp = require('gulp');
// const path = require('path');
const zxpSignCmd = require('zxp-sign-cmd');
const myExtName = require('../../package').name;

module.exports = function cp2sign() {
  return gulp.src(['CSXS/manifest.xml', 'build/**'], {base:'./'})
             .pipe(gulp.dest(`zxp/${myExtName}`));

};