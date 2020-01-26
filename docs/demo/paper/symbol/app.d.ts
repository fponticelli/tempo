import { Point, Size } from 'paper';
export interface State {
    size: Size;
    stars: {
        pos: Point;
        rotation: number;
    }[];
}
export declare type Action = unknown;
export declare const makeApp: () => import("../../../../paperjs/lib/component").PaperComponentTemplate<State, unknown, unknown>;
//# sourceMappingURL=app.d.ts.map