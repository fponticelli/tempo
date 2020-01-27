import { Segment, Point } from 'paper';
import { Mode } from './state';
export declare type Action = {
    kind: 'AddSegment';
    segment: Segment;
} | {
    kind: 'AddPath';
} | {
    kind: 'RemovePath';
} | {
    kind: 'ChangeMode';
    mode: Mode;
} | {
    kind: 'UpdatePosition';
    delta: Point;
};
export declare const Action: {
    addSegment(segment: Segment): Action;
    addPath: Action;
    removePath: Action;
    selectPath(pathIndex: number): Action;
    draw: Action;
    updatePosition(delta: Point): Action;
};
//# sourceMappingURL=action.d.ts.map