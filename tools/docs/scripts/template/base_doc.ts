import { fragment } from 'tempo-dom/lib/fragment'
import { BaseDoc } from '../parse/jsdoc'
import { div, span, h2, ul, li, input, pre, p } from 'tempo-dom/lib/html'
import { when } from 'tempo-dom/lib/when'
import { mapState } from 'tempo-dom/lib/map'
import { matchOption } from 'tempo-dom/lib/match'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Option, isSome } from 'tempo-std/lib/option'
import { markdown } from '../utils/markdown'
import { forEach } from 'tempo-dom/lib/for_each'
import { highlight } from '../utils/highlight'

export const description = mapState<BaseDoc, Option<string>, unknown>(
  { map: doc => doc.description },
  matchOption({
    Some: unsafeHtml({ content: s => markdown(s, s => s) }),
    None: ''
  })
)

export const todos = mapState<BaseDoc, string[], unknown>(
  { map: doc => doc.todos },
  when(
    { condition: todos => todos.length > 0 },
    h2({}, 'TODOs'),
    ul(
      { attrs: { class: 'list' } },
      forEach(
        {},
        li(
          { attrs: { class: 'list-item' } },
          input({ attrs: { type: 'checkbox', disabled: true }}),
          ' ',
          s => s
        )
      )
    )
  )
)

export const examples = mapState<BaseDoc, string[], unknown>(
  { map: doc => doc.examples },
  when(
    { condition: todos => todos.length > 0 },
    p(
      { attrs: { class: 'title is-6' } },
      s => s.length > 1 ? 'Examples' : 'Example'
    ),
    ul(
      { attrs: { class: 'list examples' } },
      forEach(
        {},
        li(
          { attrs: { class: 'list-item' } },
          pre(
            { attrs: { class: 'ts language-ts example' } },
            s => highlight(s)
          )
        )
      )
    )
  )
)

export const tags = mapState<BaseDoc, { type: string, name: string }[], unknown>(
  { map: doc => {
    const tags = [] as { type: string, name: string }[]
    if (doc.isDeprecated)
      tags.push({ type: 'danger', name: 'deprecated' })
    if (isSome(doc.since))
      tags.push({ type: 'info', name: `since v${doc.since.value}` })
    return tags
  }},
  when(
    { condition: tags => tags.length > 0 },
    div(
      { attrs: { class: 'tags' } },
      forEach(
        {},
        span({ attrs: { class: s => `tag is-${s.type}` } }, s => s.name)
      )
    )
  )
)

export const baseDoc = fragment<BaseDoc, unknown>(
  tags,
  description,
  todos,
  examples
)
