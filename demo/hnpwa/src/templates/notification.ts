import { div } from '@tempo/dom/lib/html'
import { DOMChild } from '@tempo/dom/lib/template'

export const notification = <State, Action>(...children: DOMChild<State, Action>[]) =>
  div({ attrs: { className: 'notification' } }, ...children)
