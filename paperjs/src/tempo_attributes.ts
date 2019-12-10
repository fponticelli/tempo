import { PaperContext } from './context'

export interface TempoAttributes<State, Action, Query, El, T> {
  readonly afterrender?:
    | undefined
    | ((state: State, el: El, ctx: PaperContext<Action>) => T | undefined)
  readonly beforechange?:
    | undefined
    | ((
        state: State,
        el: El,
        ctx: PaperContext<Action>,
        value: T | undefined
      ) => T | undefined)
  readonly afterchange?:
    | undefined
    | ((
        state: State,
        el: El,
        ctx: PaperContext<Action>,
        value: T | undefined
      ) => T | undefined)
  readonly beforedestroy?:
    | undefined
    | ((el: El, ctx: PaperContext<Action>, value: T | undefined) => void)
  readonly request?:
    | undefined
    | ((
        query: Query,
        el: El,
        ctx: PaperContext<Action>,
        value: T | undefined
      ) => void)
}
