import { Action } from '../action'
import { Page } from '../state'
import { div } from '@tempo/dom/lib/html'

export const page = div<Page, Action>({}, 'page')
