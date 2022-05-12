/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/
(function () {
  'use strict';

  let csInterface = new CSInterface();
  CSInterface.prototype.loadJSX = function (fileName) {
    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx/';
    csInterface.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
  };

  init();

  function init() {
    /*************/
    csInterface.loadJSX('hostscript.jsx');
    csInterface.loadJSX('json2.js');
    jQuery.fn.extend({
                       disableSelection: function () {
                         this.each(function () {
                           this.onselectstart = function () {
                             return false;
                           };
                         });
                       }
                     });
    $('body').disableSelection();
    /*************/

    $("#btn_refrash").click(reloadPanel);

    $("#btn_open").click(function () {
      csInterface.evalScript('openEpses()', function (res) {});
    });

    $("#btn_go-jpg").click(() => {
      csInterface.evalScript('processJpg()', function (res) {});
    });

  }

  // Reloads extension panel
  function reloadPanel() {
    location.reload();
  }

}());
