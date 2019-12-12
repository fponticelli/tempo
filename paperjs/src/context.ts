import { Project, Item, PaperScope } from 'paper'

export class PaperContext<Action> {
  constructor(
    readonly canvas: HTMLCanvasElement,
    readonly scope: PaperScope,
    readonly project: Project,
    readonly append: (item: Item) => void,
    readonly dispatch: (action: Action) => void
  ) {}

  mapAction<OtherAction>(f: (action: OtherAction) => Action) {
    return new PaperContext<OtherAction>(this.canvas, this.scope, this.project, this.append, (action: OtherAction) =>
      this.dispatch(f(action))
    )
  }

  conditionalMapAction<OtherAction>(f: (action: OtherAction) => Action | undefined) {
    return new PaperContext<OtherAction>(this.canvas, this.scope, this.project, this.append, (action: OtherAction) => {
      const newAction = f(action)
      if (typeof newAction !== 'undefined') {
        this.dispatch(newAction)
      }
    })
  }

  withAppend(append: (item: Item) => void) {
    return new PaperContext<Action>(this.canvas, this.scope, this.project, append, this.dispatch)
  }

  withDispatch<OtherAction>(dispatch: (action: OtherAction) => void) {
    return new PaperContext<OtherAction>(this.canvas, this.scope, this.project, this.append, dispatch)
  }
}
