import { BaseDoc } from '../parse/jsdoc'
import {
  DIV,
  Fragment,
  MapField,
  MapState,
  MatchOption
} from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import { isSome } from 'tempo-std/lib/option'
import { markdown } from '../utils/markdown'
import { highlight } from '../utils/highlight'

export const description = MapField<BaseDoc, unknown, unknown, 'description'>(
  'description',
  $ =>
    $.Append(
      MatchOption({
        Some: DIV($ => $.Lifecycle(unsafeHtml(s => markdown(s, s => s)))),
        None: ''
      })
    )
)

export const todos = MapField<BaseDoc, unknown, unknown, 'todos'>('todos', $ =>
  $.When(
    todos => todos.length > 0,
    $ =>
      $.H2($ => $.text('TODOs')).UL($ =>
        $.class('list').ForEach($ =>
          $.LI($ =>
            $.class('list-item')
              .INPUT_CHECKBOX($ => $.disabled(true))
              .text(' ')
              .text(s => s)
          )
        )
      )
  )
)

export const examples = MapField<BaseDoc, unknown, unknown, 'examples'>(
  'examples',
  $ =>
    $.When(
      todos => todos.length > 0,
      $ =>
        $.P($ =>
          $.class('title is-6').text(s =>
            s.length > 1 ? 'Examples' : 'Example'
          )
        ).UL($ =>
          $.class('list examples').ForEach($ =>
            $.LI($ =>
              $.class('list-item').PRE($ =>
                $.class('ts language-ts example').text(highlight)
              )
            )
          )
        )
    )
)

export const tags = MapState<
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
    $.When(
      tags => tags.length > 0,
      $ =>
        $.DIV($ =>
          $.class('tags').ForEach($ =>
            $.SPAN($ => $.class(s => `tag is-${s.type}`).text(s => s.name))
          )
        )
    )
)

export const baseDoc = Fragment<BaseDoc, unknown, unknown>($ =>
  $.AppendMany(tags, description, todos, examples)
)
