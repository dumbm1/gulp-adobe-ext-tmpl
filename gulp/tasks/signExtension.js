const gulp = require('gulp');
const zxpSignCmd = require('zxp-sign-cmd');
const myExtName = require('../../package').name;

// DEVELOPER'S PRIVATE DATA - CERTIFICATE AND PASSWORD TO CERTIFICATE
const pswrdStr = require('../../cert/pass').pass();
const certStr = require('../../сert/cert').cert();

module.exports = function signExt(cb) {
  return zxpSignCmd.sign({
                           input: `zxp/${myExtName}`,
                           output: `zxp/${myExtName}.zxp`,
                           cert: certStr,
                           password: pswrdStr
                         }).then(() => {cb();});
};