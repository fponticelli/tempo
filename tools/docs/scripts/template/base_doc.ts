import { BaseDoc } from '../parse/jsdoc'
import {
  div,
  fragment,
  mapField,
  mapState,
  matchOption
} from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import { isSome } from 'tempo-std/lib/option'
import { markdown } from '../utils/markdown'
import { highlight } from '../utils/highlight'

export const description = mapField<BaseDoc, unknown, unknown, 'description'>(
  'description',
  $ =>
    $.append(
      matchOption({
        Some: div($ => $.lifecycle(unsafeHtml(s => markdown(s, s => s)))),
        None: ''
      })
    )
)

export const todos = mapField<BaseDoc, unknown, unknown, 'todos'>('todos', $ =>
  $.when(
    todos => todos.length > 0,
    $ =>
      $.h2($ => $.text('TODOs')).ul($ =>
        $.class('list').forEach($ =>
          $.li($ =>
            $.class('list-item')
              .inputCheckbox($ => $.disabled(true))
              .text(' ')
              .text(s => s)
          )
        )
      )
  )
)

export const examples = mapField<BaseDoc, unknown, unknown, 'examples'>(
  'examples',
  $ =>
    $.when(
      todos => todos.length > 0,
      $ =>
        $.p($ =>
          $.class('title is-6').text(s =>
            s.length > 1 ? 'Examples' : 'Example'
          )
        ).ul($ =>
          $.class('list examples').forEach($ =>
            $.li($ =>
              $.class('list-item').pre($ =>
                $.class('ts language-ts example').text(s => highlight(s))
              )
            )
          )
        )
    )
)

export const tags = mapState<
  BaseDoc,
  { type: string; name: string }[],
  unknown,
  unknown
>(
  doc => {
    const tags = [] as { type: string; name: string }[]
    if (doc.isDeprecated) tags.push({ type: 'danger', name: 'deprecated' })
    if (isSome(doc.since))
      tags.push({ type: 'info', name: `since v${doc.since.value}` })
    return tags
  },
  $ =>
    $.when(
      tags => tags.length > 0,
      $ =>
        $.div($ =>
          $.class('tags').forEach($ =>
            $.spanEl($ => $.class(s => `tag is-${s.type}`).text(s => s.name))
          )
        )
    )
)

export const baseDoc = fragment<BaseDoc, unknown, unknown>($ =>
  $.appendMany(tags, description, todos, examples)
)
