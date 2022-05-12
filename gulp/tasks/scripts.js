const gulp = require('gulp');

module.exports = function scripts() {
  return gulp.src(['src/js/*.js', 'src/jsx/*.{jsx,js}'], {base: 'src/'})
             .pipe(gulp.dest('build'));

};
