interface BasicView {
    destroy(): void;
}
export interface DynamicView<State> extends BasicView {
    readonly kind: 'dynamic';
    change(value: State): void;
}
export interface StaticView extends BasicView {
    readonly kind: 'static';
}
export declare type View<State> = DynamicView<State> | StaticView;
export {};
//# sourceMappingURL=view.d.ts.map