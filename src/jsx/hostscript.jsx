//@include json2.js

var opts = {
  folder: new Folder(Folder.desktop + '/@/__DIMRO/'),
  MIN_FILE_SIZE: 500000,
};

function openEpses(opts) {
  var opts = opts || {};
  var MIN_FILE_SIZE = opts.MIN_FILE_SIZE || 500000;
  var folder = opts.folder || Folder.selectDialog();
  var files = folder.getFiles();
  for (var i = 0, j = 0; i < files.length; i++) {
    var f = files[i];
    if (f instanceof File && f.name.slice(-4) == '.eps' && f.length <= MIN_FILE_SIZE) {
      open(f);
    }
  }
  return JSON.stringify(files.length);
}

function copyPasteBrushes() {

  try {
    var brushDoc = documents.getByName('window_brashes_vector-pack_grange-brashes.ai');
    brushDoc.activate();
    executeMenuCommand('selectall');
    copy();

    for (var i = 0; i < documents.length; i++) {
      var currDoc = documents[i];
      if (currDoc == brushDoc) continue;
      currDoc.activate();
      var tmpLay = currDoc.layers.add();
      paste();
      tmpLay.remove();
    }
  } catch (e) {
    alert(e);
  }

  function _getEpses(opts) {
    var opts = opts || {};
    var MIN_FILE_SIZE = opts.MIN_FILE_SIZE || 500000;
    var folder = opts.folder || Folder.selectDialog();
    var files = folder.getFiles();
    var epses = [];
    for (var i = 0, j = 0; i < files.length; i++) {
      var f = files[i];
      if (f instanceof File && f.name.slice(-4) == '.eps' && f.length <= MIN_FILE_SIZE) {
        f.execute();
        epses.push(f);
      }
    }
    return epses;
  }

}

function closeAndSave(opts) {
  var d = getBrushDoc();
  d.close(SaveOptions.DONOTSAVECHANGES);

  for (var i = documents.length; i >= 1; i--) {
    if (activeDocument.name != 'window_brashes_vector-pack_grange-brashes.ai') {
      activeDocument.close(SaveOptions.SAVECHANGES);
    }

  }
}

function closeOther() {
  var brushDoc = documents.getByName('window_brashes_vector-pack_grange-brashes.ai');
  var saveChanges = SaveOptions.SAVECHANGES;
  var len = documents.length;
  for (var i = 0; i < len; i++) {
    if (documents[i] == brushDoc) continue;
    documents[i].close(saveChanges);
    i--;
  }
}

function getEpses(opts) {
  var opts = opts || {};
  var MIN_FILE_SIZE = opts.MIN_FILE_SIZE || 500000;
  var folder = opts.folder || Folder.selectDialog();
  var files = folder.getFiles();
  var epses = [];
  for (var i = 0, j = 0; i < files.length; i++) {
    var f = files[i];
    if (f instanceof File && f.name.slice(-4) == '.eps' && f.length <= MIN_FILE_SIZE) {
      f.execute();
      epses.push(f);
    }
  }
  return epses;
}

function getBrushDoc() {
  try {
    var d = documents.getByName('window_brashes_vector-pack_grange-brashes');
    return d;
  } catch (e) {
    throw new Error('Expected ai-file with brushes: "window_brashes_vector-pack_grange-brashes.ai"');
  }
}

function getDocLength() {
  return documents.length;
}

function closeAll() {
  for (var i = documents.length - 1; i >= 0; i--) {
    documents[i].close(SaveOptions.DONOTSAVECHANGES);
  }
}