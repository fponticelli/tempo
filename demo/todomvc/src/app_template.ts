/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
  section,
  header,
  h1,
  input,
  ul,
  label,
  div,
  li,
  footer,
  span,
  a,
  p,
  button
} from 'tempo-dom/lib/html'
import { EventHandler } from 'tempo-dom/lib/value'
import { filterState } from 'tempo-dom/lib/filter'
import { iterate } from 'tempo-dom/lib/iterate'
import { when } from 'tempo-dom/lib/when'
import { focusElement } from 'tempo-dom/lib/lifecycle'
import { Action } from './action'
import { State, Filter, Todo } from './state'

const changeF = (filter: Filter): EventHandler<State, Action> => (
  state: State
) => (state.filter === filter ? undefined : Action.toggleFilter(filter))

const selectedF = (filter: Filter) => (state: State) =>
  state.filter === filter ? 'selected' : undefined

const isEditing = (state: State, todo: Todo) =>
  (state.editing && state.editing.id === todo.id) || false

export const template = section<State, Action>(
  {},
  section(
    { attrs: { className: 'todoapp' } },
    header(
      { attrs: { className: 'header' } },
      h1({}, 'todos'),
      filterState(
        {
          stateHasChanged: ({
            current,
            next
          }: {
            current: State
            next: State
          }) => true
        },
        input({
          attrs: {
            type: 'text',
            className: 'new-todo',
            placeholder: 'What needs to be done?',
            autofocus: (state: State) => state.editing == null,
            value: (state: State) => state.adding
          },
          events: {
            keydown: (_, ev, el) => {
              const e = ev as KeyboardEvent
              const input = el as HTMLInputElement
              if (e.keyCode === 13) {
                return Action.createTodo(input.value.trim())
              } else if (e.keyCode === 27) {
                return Action.cancelAddingTodo
              } else {
                return Action.adddingTodo(input.value)
              }
            }
          }
        })
      )
    ),
    section(
      {
        attrs: { className: 'main' },
        styles: {
          visibility: (state: State) =>
            state.todos.length === 0 ? 'hidden' : ''
        }
      },
      input({
        attrs: {
          id: 'toggle-all',
          className: 'toggle-all',
          type: 'checkbox',
          checked: (state: State) => state.completed === state.todos.length
        },
        events: {
          click: () => Action.toggleAllTodo
        }
      }),
      label({ attrs: { for: 'toggle-all' } }, 'Mark all as complete'),
      ul(
        { attrs: { className: 'todo-list' } },
        iterate(
          { map: (state: State) => state.filtered },
          filterState<[Todo, State, number], Action>(
            {
              stateHasChanged: ({ current: [a, sa], next: [b, sb] }) =>
                a !== b || sa.editing !== sb.editing
            },
            li(
              {
                attrs: {
                  className: ([todo, state]: [Todo, State, number]) => {
                    const classes = [
                      todo.completed ? 'completed' : undefined,
                      isEditing(state, todo) ? 'editing' : undefined
                    ].filter(v => v != null)
                    return classes.join(' ') || undefined
                  }
                }
              },
              div(
                { attrs: { className: 'view' } },
                input({
                  attrs: {
                    className: 'toggle',
                    type: 'checkbox',
                    checked: ([todo]: [Todo, State, number]) => todo.completed
                  },
                  events: {
                    change: ([todo]: [Todo, State, number]) =>
                      Action.toggleTodo(todo.id)
                  }
                }),
                label(
                  {
                    events: {
                      dblclick: ([todo]: [Todo, State, number]) =>
                        Action.editingTodo(todo.id, todo.title)
                    }
                  },
                  ([todo]: [Todo, State, number]) => todo.title
                ),
                button({
                  attrs: {
                    className: 'destroy'
                  },
                  events: {
                    click: ([todo]: [Todo, State, number]) =>
                      Action.removeTodo(todo.id)
                  }
                })
              ),
              when(
                {
                  condition: ([todo, state]: [Todo, State, number]) =>
                    isEditing(state, todo) /* todo.editing */
                },
                input({
                  lifecycle: focusElement,
                  attrs: {
                    type: 'text',
                    className: 'edit',
                    value: ([_, state]: [Todo, State, number]) =>
                      state.editing && state.editing.title
                  },
                  events: {
                    keydown: ([todo]: [Todo, State, number], ev, el) => {
                      const e = ev as KeyboardEvent
                      const input = el as HTMLInputElement
                      if (e.keyCode === 13) {
                        const value = input.value.trim()
                        if (value !== '') {
                          return Action.updateTodo(todo.id, value)
                        } else {
                          return Action.removeTodo(todo.id)
                        }
                      } else if (e.keyCode === 27) {
                        return Action.cancelEditingTodo
                      } else {
                        return Action.editingTodo(todo.id, input.value)
                      }
                    },
                    blur: ([todo]: [Todo, State, number], _, el) => {
                      const input = el as HTMLInputElement
                      const value = input.value.trim()
                      if (value !== '') {
                        return Action.updateTodo(todo.id, value)
                      } else {
                        return Action.removeTodo(todo.id)
                      }
                    }
                  }
                })
              )
            )
          )
        )
      )
    ),
    filterState(
      {
        stateHasChanged: ({ current, next }) =>
          current.filter !== next.filter ||
          current.completed !== next.completed ||
          current.todos.length !== next.todos.length
      },
      footer(
        {
          attrs: { className: 'footer' },
          styles: {
            display: state => (state.todos.length === 0 ? 'none' : 'block')
          }
        },
        span({ attrs: { className: 'todo-count' } }, state => {
          const left = state.todos.length - state.completed
          if (left === 1) {
            return '1 item left'
          } else {
            return `${left} items left`
          }
        }),
        ul(
          { attrs: { className: 'filters' } },
          li(
            {},
            a(
              {
                attrs: {
                  href: '#/',
                  className: selectedF(Filter.All)
                },
                events: {
                  click: changeF(Filter.All)
                }
              },
              'All'
            )
          ),
          li(
            {},
            a(
              {
                attrs: {
                  href: '#/active',
                  className: selectedF(Filter.Active)
                },
                events: {
                  click: changeF(Filter.Active)
                }
              },
              'Active'
            )
          ),
          li(
            {},
            a(
              {
                attrs: {
                  href: '#/completed',
                  className: selectedF(Filter.Completed)
                },
                events: {
                  click: changeF(Filter.Completed)
                }
              },
              'Completed'
            )
          )
        ),
        when(
          {
            condition: (state: State) => {
              return state.completed > 0
            }
          },
          button(
            {
              attrs: {
                className: 'clear-completed'
              },
              events: {
                click: () => Action.clearCompleted
              }
            },
            'Clear completed'
          )
        )
      )
    )
  ),
  footer(
    { attrs: { className: 'info' } },
    p({}, 'Double-click to edit a todo'),
    p(
      {},
      'Created by ',
      a(
        { attrs: { href: 'http://github.com/fponticelli' } },
        'Franco Ponticelli'
      )
    ),
    p({}, 'Part of ', a({ attrs: { href: 'http://todomvc.com' } }, 'TodoMVC'))
  )
)
