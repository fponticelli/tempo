import { DOMChild } from './template'
import { until } from './until'

export const forEach = <State extends any[], Action>(
  opts: { refId?: string },
  ...children: DOMChild<State[number], Action>[]
) => until({
  refId: opts.refId || 'md:for_each',
  repeatUntil: (state: State, index: number) => state[index]
}, ...children)
