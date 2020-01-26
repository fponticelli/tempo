import { Size } from 'paper';
export interface State {
    size: Size;
    url: string;
    raster: HTMLImageElement | undefined;
    message: string;
}
export declare const makeState: (url: string) => State;
//# sourceMappingURL=state.d.ts.map