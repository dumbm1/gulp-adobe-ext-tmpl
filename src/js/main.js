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

    $("#btn_open").click(function() {
      csInterface.evalScript('openEpses()', function (res) {
        // alert(res);

      });

    });
    $("#btn_process").click(() => {
      csInterface.evalScript('copyPasteBrushes()', function (res) {
      });
    });
    $("#btn_close").click(() => {
      csInterface.evalScript('closeOther()', function (res) {
      });
    });

    /*    csInterface.evalScript('openEpses()', function (result) {
     setTimeout(function () {

     }, 1000);
     opts.symbolName = result;

     csInterface.evalScript('postProcess(' + JSON.stringify(opts) + ')');
     });*/

  }

  /*  function loadJSX(fileName) {
   var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
   csInterface.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
   }*/

  // Reloads extension panel
  function reloadPanel() {
    location.reload();
  }

}());
