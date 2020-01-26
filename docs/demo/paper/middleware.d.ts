import { CanvasState } from './canvas_state';
import { CanvasAction } from './canvas_action';
import { View } from 'tempo-core';
import { Query } from './query';
export declare const makeMiddleware: (view: View<CanvasState, Query>) => (state: CanvasState, action: CanvasAction) => void;
//# sourceMappingURL=middleware.d.ts.map