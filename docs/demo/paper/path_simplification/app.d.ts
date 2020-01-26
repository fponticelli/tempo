import { PathItem, Mode } from './state';
import { Action } from './action';
import { Store } from 'tempo-store/lib/store';
import { Segment } from 'paper';
export declare const makeApp: (store: Store<{
    paths: PathItem[];
    current: Segment[];
    mode: Mode;
}, Action>) => import("../../../../paperjs/lib/component").PaperComponentTemplate<{
    paths: PathItem[];
    current: Segment[];
    mode: Mode;
}, Action, unknown>;
//# sourceMappingURL=app.d.ts.map