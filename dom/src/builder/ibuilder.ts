import { DOMTemplate, DOMChild } from '../template'
import { domChildToTemplate } from '../utils/dom'

export interface IBuilder<State, Action, Query> {
  build(): DOMTemplate<State, Action, Query>
}

export function childOrBuilderToTemplate<State, Action, Query>(
  src: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
): DOMTemplate<State, Action, Query> {
  if (typeof (src as any).build === 'function') {
    return (src as IBuilder<State, Action, Query>).build()
  } else {
    return domChildToTemplate(src as DOMChild<State, Action, Query>)
  }
}
