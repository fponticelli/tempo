/// <reference types="common/temp/node_modules/.pnpm/registry.npmjs.org/paper/0.12.3/node_modules/paper/dist/paper" />
import { Mode } from './state';
import { Action } from './action';
export declare const reducer: import("../../../../store/lib/reducer").Reducer<{
    paths: import("./state").PathItem[];
    current: paper.Segment[];
    mode: Mode;
}, Action>;
//# sourceMappingURL=reducer.d.ts.map