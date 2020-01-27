export var Action = {
    changeSample: function (sample) {
        return { kind: 'ChangeSample', sample: sample };
    },
    exportSVG: { kind: 'ExportSVG' },
    exportPNG: { kind: 'ExportPNG' },
    setMainAreaSize: function (size) {
        return { kind: 'SetMainAreaSize', size: size };
    }
};
