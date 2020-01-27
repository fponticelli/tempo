import { Query } from './query';
var makeSave = function (name, type) { return function (file) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}; };
var saveSVG = makeSave('export.svg', 'application/svg+xml');
var savePNG = makeSave('export.png', 'image/png');
export var makeMiddleware = function (view) { return function (state, action) {
    switch (action.kind) {
        case 'ExportPNG':
            return view.request(Query.exportPNG(savePNG));
        case 'ExportSVG':
            return view.request(Query.exportSVG(saveSVG));
        default:
    }
}; };
