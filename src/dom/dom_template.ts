import { Template } from '../core/template'
import { DOMContext } from './dom_context'
import { DOMTextValue } from './dom_value'

export interface DOMTemplate<State, Action> extends Template<State, Action, DOMContext> {}

export type DOMChild<State, Action> = DOMTemplate<State, Action> | DOMTextValue<State>
