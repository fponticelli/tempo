import { Size } from 'paper';
export declare const examples: readonly ["paint", "path_simplification", "symbol"];
export declare type Examples = typeof examples;
export declare type Example = Examples[number];
export interface State {
    examples: Examples;
    selected: Example;
    mainAreaSize: Size | undefined;
}
export declare const createState: () => State;
export interface CanvasState {
    kind: Example;
    size: Size;
}
//# sourceMappingURL=state.d.ts.map