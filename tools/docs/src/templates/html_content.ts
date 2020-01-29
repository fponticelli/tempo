import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'

export const htmlContent = unsafeHtml<string, Action>({ content: s => s})
