import { Template } from '@mood/core'
import { DOMContext } from './context'
import { DOMTextValue } from './value'

export interface DOMTemplate<State, Action> extends Template<State, DOMContext<Action>> {}

export type DOMChild<State, Action> = DOMTemplate<State, Action> | DOMTextValue<State>
