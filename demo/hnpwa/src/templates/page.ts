import { Action } from '../action'
import { Page } from '../state'
import { html } from '@mood/dom/lib/web'
const { div } = html

export const page = div<Page, Action>({}, 'page')
