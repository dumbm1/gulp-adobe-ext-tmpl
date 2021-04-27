const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const gulp_ext_repl = require('gulp-ext-replace');

module.exports = function pug2manifest(cb) {
  return gulp.src('src/manifest.pug')
             .pipe(plumber())
             .pipe(pug())
             .pipe(gulp_ext_repl('.xml'))
             .pipe(gulp.dest('CSXS/'));
};
