const gulp = require('gulp');
// const sass = require('gulp-sass'); // bug with convert rgb-colors
const dartSass = require('gulp-dart-sass');

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
             .pipe(dartSass())
             .pipe(gulp.dest('build/css'));
};