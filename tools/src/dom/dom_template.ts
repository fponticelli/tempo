import { Template } from '../core/template'
import { DOMContext } from './dom_context'

export interface DOMTemplate<State, Action> extends Template<State, Action, DOMContext> {

}
