export var Query = {
    mainAreaSize: function (callback) {
        return { kind: 'MainAreaSize', callback: callback };
    },
    exportPNG: function (callback) {
        return { kind: 'ExportPNG', callback: callback };
    },
    exportSVG: function (callback) {
        return { kind: 'ExportSVG', callback: callback };
    }
};
