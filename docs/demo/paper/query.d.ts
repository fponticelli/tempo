import { Size } from 'paper';
export declare type Query = {
    kind: 'MainAreaSize';
    callback: (size: Size) => void;
} | {
    kind: 'ExportSVG';
    callback: (content: Blob) => void;
} | {
    kind: 'ExportPNG';
    callback: (content: Blob) => void;
};
export declare const Query: {
    mainAreaSize(callback: (size: Size) => void): Query;
    exportPNG(callback: (content: Blob) => void): Query;
    exportSVG(callback: (content: Blob) => void): Query;
};
//# sourceMappingURL=query.d.ts.map