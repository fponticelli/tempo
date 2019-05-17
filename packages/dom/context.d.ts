export declare class DOMContext<Action> {
    readonly doc: Document;
    readonly append: (node: Node) => void;
    readonly parent: Element;
    readonly dispatch: (action: Action) => void;
    static fromElement<Action>(element: Element, dispatch: (action: Action) => void): DOMContext<Action>;
    constructor(doc: Document, append: (node: Node) => void, parent: Element, dispatch: (action: Action) => void);
    mapAction<OtherAction>(f: (action: OtherAction) => Action): DOMContext<OtherAction>;
    conditionalMapAction<OtherAction>(f: (action: OtherAction) => Action | undefined): DOMContext<OtherAction>;
    withAppend(append: (node: Node) => void): DOMContext<Action>;
    withParent(parent: Element): DOMContext<Action>;
    withDispatch<OtherAction>(dispatch: (action: OtherAction) => void): DOMContext<OtherAction>;
}
//# sourceMappingURL=context.d.ts.map