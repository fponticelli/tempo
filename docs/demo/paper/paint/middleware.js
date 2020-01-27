import { Raster } from 'paper';
export var middleware = function (store) { return function (state, action) {
    switch (action.kind) {
        case 'LoadUrl':
            var raster = new Raster();
            raster.onLoad = function () {
            };
            break;
    }
}; };
