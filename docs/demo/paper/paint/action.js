export var Action = {
    loadUrl: { kind: 'LoadUrl' },
    changeUrl: function (url) {
        return { kind: 'ChangeUrl', url: url };
    },
    rasterLoaded: function (raster) {
        return { kind: 'RasterLoaded', raster: raster };
    }
};
