import { Template } from 'tempo-core/lib/template'
import { PaperContext } from './context'

export interface PaperTemplate<State, Action> extends Template<State, PaperContext<Action>> {}
