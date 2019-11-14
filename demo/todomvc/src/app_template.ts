/*
Copyright 2018 Google LLC
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

import { section, header, h1, input, ul, label, div, li, footer, span, a, p, button } from '@mood/dom/lib/html'
import { mapState } from '@mood/dom/lib/map'
import { DOMEventHandler } from '@mood/dom/lib/value'
import { forEach } from '@mood/dom/lib/for_each'
import { when } from '@mood/dom/lib/when'
import { Action } from './action'
import { State, Filter, Todo } from './state'

const changeF = <El extends Element>(filter: Filter): DOMEventHandler<State, Action, MouseEvent, El> => (
  state: State
) => (state.filter === filter ? undefined : Action.toggleFilter(filter))

const filterF = (filter: Filter) => {
  if (filter === Filter.All) {
    return (_: Todo) => true
  } else if (filter === Filter.Completed) {
    return (todo: Todo) => todo.completed
  } else {
    return (todo: Todo) => !todo.completed
  }
}

const selectedF = (filter: Filter) => (state: State) => (state.filter === filter ? 'selected' : undefined)

type TodoWEditing = Todo & { editing: boolean }

export const template = section<State, Action>(
  {},
  section(
    { attrs: { className: 'todoapp' } },
    header(
      { attrs: { className: 'header' } },
      h1({}, 'todos'),
      input({
        attrs: {
          className: 'new-todo',
          placeholder: 'What needs to be done?',
          autofocus: state => state.editing == null,
          value: state => state.adding
        },
        events: {
          keydown: (_: State, e: KeyboardEvent, input: HTMLInputElement) => {
            if (e.keyCode === 13) {
              return Action.addTodo(input.value.trim())
            } else if (e.keyCode === 27) {
              return Action.cancelAddTodo
            } else {
              return Action.adddingTodo(input.value)
            }
          }
        }
      })
    ),
    section(
      { attrs: { className: 'main' } },
      input({ attrs: { id: 'toggle-all', className: 'toggle-all', type: 'checkbox' } }),
      label({ attrs: { for: 'toggle-all' } }, 'Mark all as complete'),
      ul(
        { attrs: { className: 'todo-list' } },
        mapState(
          {
            map: state =>
              state.todos.filter(filterF(state.filter)).map(todo => {
                if (state.editing && state.editing.id === todo.id) {
                  return { ...todo, editing: true, title: state.editing.title }
                } else {
                  return { ...todo, editing: false }
                }
              })
          },
          forEach<TodoWEditing[], Action>(
            {},
            li(
              {
                attrs: {
                  className: todo => {
                    const classes = [
                      todo.completed ? 'completed' : undefined,
                      todo.editing ? 'editing' : undefined
                    ].filter(v => v != null)
                    return classes.join(' ') || undefined
                  }
                }
              },
              div(
                { attrs: { className: 'view' } },
                input<TodoWEditing, Action>({
                  attrs: {
                    className: 'toggle',
                    type: 'checkbox',
                    checked: todo => todo.completed
                  },
                  events: {
                    change: todo => Action.toggleTodo(todo.id)
                  }
                }),
                label({ events: { dblclick: todo => Action.editingTodo(todo.id, todo.title) } }, todo => todo.title),
                button({
                  attrs: {
                    className: 'destroy'
                  },
                  events: {
                    click: todo => Action.removeTodo(todo.id)
                  }
                })
              ),
              when(
                { condition: todo => todo.editing },
                input<TodoWEditing, Action>({
                  afterrender: (_, el) => el.focus(),
                  attrs: {
                    className: 'edit',
                    value: todo => todo.title
                  },
                  events: {
                    keypress: (todo: Todo, e: KeyboardEvent, input: HTMLInputElement) => {
                      if (e.keyCode === 13) {
                        const value = input.value.trim()
                        if (value) {
                          return Action.updateTodo(todo.id, value)
                        } else {
                          return Action.removeTodo(todo.id)
                        }
                      } else if (e.keyCode === 27) {
                        return Action.cancelUpdateTodo
                      } else {
                        return Action.editingTodo(todo.id, input.value)
                      }
                    },
                    blur: (todo: Todo, _: MouseEvent, input: HTMLInputElement) => {
                      return Action.updateTodo(todo.id, input.value.trim())
                    }
                  }
                })
              )
            )
          )
        )
      )
    ),
    footer(
      { attrs: { className: 'footer' }, styles: { 'display': (state) => (state.todos.length === 0 ? 'none' : 'block') } },
      span(
        { attrs: { className: 'todo-count' } }
        state => {
          const completed = state.todos.filter(todo => todo.completed).length
          const left = state.todos.length - completed
          if (left === 1) {
            return '1 item left'
          } else {
            return `${left} items left`
          }
        }
      ),
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
            return state.todos.filter(v => v.completed).length > 0
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
  ),
  footer(
    { attrs: { className: 'info' } },
    p({}, 'Double-click to edit a todo'),
    p({}, 'Created by ', a({ attrs: { href: 'http://github.com/fponticelli' } }, 'Franco Ponticelli')),
    p({}, 'Part of ', a({ attrs: { href: 'http://todomvc.com' } }, 'TodoMVC'))
  )
)
