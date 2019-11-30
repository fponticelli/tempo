import { li, ul, div, a } from '@tempo/dom/lib/html'
import { mapState } from '@tempo/dom/lib/map'
import { forEach } from '@tempo/dom/lib/for_each'
import { Route } from '../route'
import { Item } from '../state'
import { Action } from '../action'
import { lazy } from '@tempo/dom/lib/lazy'
import { DOMTemplate } from '@tempo/dom/lib/template'
import { when } from '@tempo/dom/lib/when'
import { unsafeHtml } from '@tempo/dom/lib/unsafe_html'
import { sanitize } from 'dompurify'
import { linkRoute } from './link_route'

export const commentTemplate: DOMTemplate<Item, Action> = lazy<Item, Action>(() =>
  li<Item, Action>(
    {},
    div(
      { attrs: { className: 'comment-meta' } },
      linkRoute({ route: item => Route.user(item.user) }),
      ' ',
      item => item.time_ago
    ),
    unsafeHtml({ content: item => item.content, transform: sanitize }),
    mapState<Item, Item[], Action>({ map: item => item.comments || [] }, commentsTemplate)
  )
)

export const commentsTemplate = lazy<Item[], Action>(() =>
  when({ condition: comments => comments.length > 0 }, ul({}, forEach({}, commentTemplate)))
)
