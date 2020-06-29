import { DOMContext } from './context'

export interface Lifecycle<State> {
  beforeChange(state: State): void
  afterChange(state: State): void
  beforeDestroy(): void
}

export type MakeLifecycle<State, Action> = (
  state: State,
  element: HTMLElement,
  ctx: DOMContext<Action>
) => Lifecycle<State>

export function compose<State, Action>(
  a: MakeLifecycle<State, Action>,
  b: MakeLifecycle<State, Action>
): MakeLifecycle<State, Action> {
  return (state: State, element: HTMLElement, ctx: DOMContext<Action>) => {
    const al = a(state, element, ctx)
    const bl = b(state, element, ctx)
    return {
      beforeChange(state: State) {
        al.beforeChange(state)
        bl.beforeChange(state)
      },
      afterChange(state: State) {
        al.afterChange(state)
        bl.afterChange(state)
      },
      beforeDestroy() {
        al.beforeDestroy()
        bl.beforeDestroy()
      }
    }
  }
}

export function makeEmptyLifecycle<State, Action, HTMLElement>(
  state: State,
  element: HTMLElement,
  ctx: DOMContext<Action>
) {
  return {
    beforeChange(state: State) {},
    afterChange(state: State) {},
    beforeDestroy() {}
  }
}

export function focusElement<State, Action, HTMLElement>(
  state: State,
  element: HTMLElement,
  ctx: DOMContext<Action>
) {
  ;((element as unknown) as HTMLInputElement).focus() // TODO
  return {
    beforeChange(state: State) {},
    afterChange(state: State) {},
    beforeDestroy() {}
  }
}
