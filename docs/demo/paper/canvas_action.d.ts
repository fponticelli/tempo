import { Example } from './canvas_state';
import { Size } from 'paper';
export declare type CanvasAction = {
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
export declare const CanvasAction: {
    changeSample(sample: "symbol" | "path_simplification"): CanvasAction;
    exportSVG: CanvasAction;
    exportPNG: CanvasAction;
    setMainAreaSize(size: Size): CanvasAction;
};
//# sourceMappingURL=canvas_action.d.ts.map