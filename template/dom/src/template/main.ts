import { DIV } from 'tempo-dom/lib/html'
import { State } from '../app/state'
import { Action } from '../app/action'

export const main = DIV<State, Action, unknown>($ => $.text('Hello World'))
