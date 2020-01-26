import { Size } from 'paper';
export declare const examples: readonly ["path_simplification", "symbol"];
export declare type Examples = typeof examples;
export declare type Example = Examples[number];
export interface CanvasState {
    examples: Examples;
    selected: Example;
    mainAreaSize: Size | undefined;
}
export declare const createState: () => CanvasState;
export interface SampleState {
    kind: Example;
    size: Size;
}
//# sourceMappingURL=canvas_state.d.ts.map