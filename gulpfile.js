const gulp = require('gulp');

const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug2html');
const pug2manifest = require('./gulp/tasks/pug2manifest');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');

const copy2sign = require('./gulp/tasks/copy2sign');
const signExtension = require('./gulp/tasks/signExtension');


module.exports.default = gulp.series(clean, pug2html, pug2manifest, styles, scripts, fonts);

module.exports.sign = gulp.series(copy2sign, signExtension);

