export declare type Result<T> = {
    kind: 'failure';
    message: string;
} | {
    kind: 'success';
    value: T;
};
export declare type Action = {
    kind: 'LoadUrl';
} | {
    kind: 'ChangeUrl';
    url: string;
} | {
    kind: 'ImageLoaded';
    result: Result<HTMLImageElement>;
};
export declare const Action: {
    loadUrl: Action;
    changeUrl(url: string): Action;
    imageLoaded(value: HTMLImageElement): Action;
    imageFailed(message: string): Action;
};
//# sourceMappingURL=action.d.ts.map