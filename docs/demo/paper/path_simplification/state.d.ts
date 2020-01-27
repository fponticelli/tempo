import { Point, Segment } from 'paper';
export declare type Mode = {
    kind: 'drawing';
} | {
    kind: 'editing';
    pathIndex: number;
};
export declare const Mode: {
    drawing: Mode;
    editing(pathIndex: number): Mode;
};
export interface PathItem {
    segments: Segment[];
    position: Point;
}
export declare const state: {
    paths: PathItem[];
    current: Segment[];
    mode: Mode;
};
export declare type State = typeof state;
//# sourceMappingURL=state.d.ts.map