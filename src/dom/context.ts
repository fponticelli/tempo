export class DOMContext<Action> {
  static fromElement<Action>(element: Element, dispatch: (action: Action) => void): DOMContext<Action> {
    return new DOMContext<Action>(
      element.ownerDocument || document,
      (node: Node) => element.appendChild(node),
      element,
      dispatch
    )
  }

  constructor(
    readonly doc: Document,
    readonly append: (node: Node) => void,
    readonly parent: Element,
    readonly dispatch: (action: Action) => void
  ) {}

  mapAction<OtherAction>(f: (action: OtherAction) => Action) {
    return new DOMContext<OtherAction>(
      this.doc,
      this.append,
      this.parent,
      (action: OtherAction) => this.dispatch(f(action))
    )
  }

  conditionalMapAction<OtherAction>(f: (action: OtherAction) => Action | undefined) {
    return new DOMContext<OtherAction>(
      this.doc,
      this.append,
      this.parent,
      (action: OtherAction) => {
        let newAction = f(action)
        if (newAction !== undefined)
          this.dispatch(newAction)
      }
    )
  }

  withAppend(append: (node: Node) => void) {
    return new DOMContext<Action>(
      this.doc,
      append,
      this.parent,
      this.dispatch
    )
  }

  withParent(parent: Element) {
    return new DOMContext<Action>(
      this.doc,
      this.append,
      parent,
      this.dispatch
    )
  }

  // withDoc(doc: Document) {
  //   return new DOMContext<Action>(
  //     doc,
  //     this.append,
  //     this.parent,
  //     this.dispatch
  //   )
  // }

  withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
    return new DOMContext<OtherAction>(
      this.doc,
      this.append,
      this.parent,
      dispatch
    )
  }
}
