import { Project, Shape } from 'paper'

export class PaperContext<Action> {

  constructor(
    readonly project: Project,
    readonly append: (shape: Shape) => void
    // readonly append: (node: Node) => void,
    // readonly parent: Element,
    // readonly dispatch: (action: Action) => void
  ) {}

  // mapAction<OtherAction>(f: (action: OtherAction) => Action) {
  //   return new PaperContext<OtherAction>(this.doc, this.append, this.parent, (action: OtherAction) =>
  //     this.dispatch(f(action))
  //   )
  // }

  // conditionalMapAction<OtherAction>(f: (action: OtherAction) => Action | undefined) {
  //   return new PaperContext<OtherAction>(this.doc, this.append, this.parent, (action: OtherAction) => {
  //     const newAction = f(action)
  //     if (typeof newAction !== 'undefined') {
  //       this.dispatch(newAction)
  //     }
  //   })
  // }

  // withAppend(append: (node: Node) => void) {
  //   return new PaperContext<Action>(this.doc, append, this.parent, this.dispatch)
  // }

  // withParent(parent: Element) {
  //   return new PaperContext<Action>(this.doc, this.append, parent, this.dispatch)
  // }

  // withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
  //   return new PaperContext<OtherAction>(this.doc, this.append, this.parent, dispatch)
  // }
}
