import { div } from '@tempo/dom/lib/html'
import { Article } from '../state'
import { Action } from '../action'

export const article = div<Article, Action>({}, 'article')
