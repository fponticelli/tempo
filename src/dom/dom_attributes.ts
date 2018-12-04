import { DOMValue } from './dom_value'

export type DOMAttributes<State> = { [key in string]: DOMValue<State, never> };
