import { Size } from 'paper';
export var makeState = function (url) {
    return {
        size: new Size(0, 0),
        url: url,
        raster: undefined,
        message: ''
    };
};
