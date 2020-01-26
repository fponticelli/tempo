import { Example } from './state';
import { Size } from 'paper';
export declare type Action = {
    kind: 'ChangeSample';
    sample: Example;
} | {
    kind: 'SetMainAreaSize';
    size: Size;
} | {
    kind: 'ExportSVG';
} | {
    kind: 'ExportPNG';
};
export declare const Action: {
    changeSample(sample: "symbol" | "path_simplification"): Action;
    exportSVG: Action;
    exportPNG: Action;
    setMainAreaSize(size: Size): Action;
};
//# sourceMappingURL=action.d.ts.map