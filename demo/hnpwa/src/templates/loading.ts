import { div } from '@tempo/dom/lib/html'
import { notification } from './notification'
import { Loading } from '../state'
import { Action } from '../action'

export const loadingTemplate = notification<Loading, Action>(div({ attrs: { className: 'spinner' } }))
