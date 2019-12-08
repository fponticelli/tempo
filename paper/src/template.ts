import { Template } from 'tempo-core/lib/template'
import { PaperContext } from './context'

export interface PaperTemplate<State, Action, Query>
  extends Template<State, Query, PaperContext<Action>> {}
