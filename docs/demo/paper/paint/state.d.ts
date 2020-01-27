import { Size, Raster } from 'paper';
export interface State {
    size: Size;
    url: string;
    image: HTMLImageElement | undefined;
    raster: Raster | undefined;
    message: string;
}
export declare const makeState: (url: string) => State;
//# sourceMappingURL=state.d.ts.map