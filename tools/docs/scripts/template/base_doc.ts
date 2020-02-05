import { fragment } from 'tempo-dom/lib/fragment'
import { BaseDoc } from '../parse/jsdoc'
import { div, span, h2, ul, li, input } from 'tempo-dom/lib/html'
import { when } from 'tempo-dom/lib/when'
import { mapState } from 'tempo-dom/lib/map'
import { matchOption } from 'tempo-dom/lib/match'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Option } from 'tempo-std/lib/option'
import { markdown } from './markdown'
import { forEach } from 'tempo-dom/lib/for_each'

const description = mapState<BaseDoc, Option<string>, unknown>(
  { map: doc => doc.description },
  matchOption({
    Some: unsafeHtml({ content: s => markdown(s) }),
    None: ''
  })
)

const todos = mapState<BaseDoc, string[], unknown>(
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

const examples = mapState<BaseDoc, string[], unknown>(
  { map: doc => doc.examples },
  when(
    { condition: todos => todos.length > 0 },
    h2({}, 'Examples'),
    ul(
      { attrs: { class: 'list' } },
      forEach(
        {},
        li(
          { attrs: { class: 'list-item' } },
          s => s // TODO make this highlighted and styled code
        )
      )
    )
  )
)
export const baseDoc = fragment<BaseDoc, unknown>(
  div(
    { attrs: { class: 'tags' } },
    when(
      { condition: bd => bd.isDeprecated },
      span({ attrs: { class: 'tag is-danger' } }, 'deprecated')
    ),
    mapState(
      { map: doc => doc.since },
      matchOption({
        Some: span({ attrs: { class: 'tag is-info' } }, s => `since v${s}`),
        None: ''
      })
    )
  ),
  description,
  todos,
  examples
)
