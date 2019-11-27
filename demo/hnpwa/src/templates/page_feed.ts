import { section, ul, li, aside, div, span, link, a } from '@tempo/dom/lib/html'
import { iterate } from '@tempo/dom/lib/iterate'
import { PageFeed, Item } from '../state'
import { Action } from '../action'
import { matchOnKind } from '@tempo/dom/lib/match'
import { mapState } from '@tempo/dom/lib/map'

const listItemUrl = mapState(
  { map: (state: Item) => ({ kind: state.url.kind, id: state.id, title: state.title }) }, // TODO don't like this very much
  matchOnKind<{ kind: 'external' | 'internal' | 'none'; id: number; title: string }, Action>({
    external: link({}),
    internal: a({}),
    none: span({}, item => item.title)
  })
)

const itemFooter = (item: Item) => {}

const listItem = li<[Item, PageFeed, number], Action>(
  {},
  aside({}, ([_i, _p, index]) => String(index + 1)),
  div(
    {},
    listItemUrl,
    span({ attrs: { className: 'domain' } }, ([item]) => item.domain, itemFooter)
  )
)

export const pageFeed = section<PageFeed, Action>(
  {
    attrs: { className: 'list-view' }
  },
  ul({}, iterate({ getArray: state => state.items }, listItem))
)
