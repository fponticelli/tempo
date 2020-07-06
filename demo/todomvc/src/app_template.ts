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

import { Fragment } from 'tempo-dom/lib/html'
import { EventHandler } from 'tempo-dom/lib/value'
import { Action } from './action'
import { State, Filter, Todo } from './state'

const changeF = (filter: Filter): EventHandler<State, Action> => (
  state: State
) => (state.filter === filter ? undefined : Action.toggleFilter(filter))

const selectedF = (filter: Filter) => (state: State) =>
  state.filter === filter ? 'selected' : undefined

const isEditing = (state: State, todo: Todo) =>
  (state.editing && state.editing.id === todo.id) || false

export const template = Fragment<State, Action, unknown>($ =>
  $.SECTION($ =>
    $.class('todoapp')
      .DIV($ =>
        $.HEADER($ =>
          $.class('header')
            .H1($ => $.text('todos'))
            .INPUT_TEXT($ =>
              $.class('new-todo')
                .placeholder('What needs to be done?')
                .autoFocus(s => s.editing == null)
                .value(s => s.adding)
                .onKeyDown((_, ev, input) => {
                  if (ev.keyCode === 13) {
                    return Action.createTodo(input.value.trim())
                  } else if (ev.keyCode === 27) {
                    return Action.cancelAddingTodo
                  } else {
                    return Action.adddingTodo(input.value)
                  }
                })
            )
        ).SECTION($ =>
          $.class('main')
            .style('visibility', s => (s.todos.length === 0 ? 'hidden' : ''))
            .INPUT_CHECKBOX($ =>
              $.id('toggle-all')
                .class('toggle-all')
                .checked(s => s.completed === s.todos.length)
                .onClick(() => Action.toggleAllTodo)
            )
            .LABEL($ => $.for('toggle-all').text('Mark all as complete'))
            .UL($ =>
              $.class('todo-list').Iterate(
                s => s.filtered,
                $ =>
                  $.LI($ =>
                    $.class(([todo, state]) => ({
                      completed: todo.completed,
                      editing: isEditing(state, todo)
                    }))
                      .DIV($ =>
                        $.class('view')
                          .INPUT_CHECKBOX($ =>
                            $.class('toggle')
                              .checked(([todo]) => todo.completed)
                              .onChange(([todo]) => Action.toggleTodo(todo.id))
                          )
                          .LABEL($ =>
                            $.onDblClick(([todo]) =>
                              Action.editingTodo(todo.id, todo.title)
                            ).text(([todo]) => todo.title)
                          )
                          .BUTTON($ =>
                            $.class('destroy').onClick(([todo]) =>
                              Action.removeTodo(todo.id)
                            )
                          )
                      )
                      .When(
                        ([todo, state]) => isEditing(state, todo),
                        $ =>
                          $.INPUT_TEXT($ =>
                            $.class('edit')
                              .value(
                                ([_, state]) =>
                                  state.editing && state.editing.title
                              )
                              .onKeyDown(([todo], ev, input) => {
                                if (ev.keyCode === 13) {
                                  const value = input.value.trim()
                                  if (value !== '') {
                                    return Action.updateTodo(todo.id, value)
                                  } else {
                                    return Action.removeTodo(todo.id)
                                  }
                                } else if (ev.keyCode === 27) {
                                  return Action.cancelEditingTodo
                                } else {
                                  return Action.editingTodo(
                                    todo.id,
                                    input.value
                                  )
                                }
                              })
                              .onBlur(([todo], _, el) => {
                                const input = el as HTMLInputElement
                                const value = input.value.trim()
                                if (value !== '') {
                                  return Action.updateTodo(todo.id, value)
                                } else {
                                  return Action.removeTodo(todo.id)
                                }
                              })
                          )
                      )
                  )
              )
            )
        )
      )
      .FOOTER($ =>
        $.class('footer')
          .style('display', s => (s.todos.length === 0 ? 'none' : 'block'))
          .SPAN($ =>
            $.class('todo-count').text(s => {
              const left = s.todos.length - s.completed
              if (left === 1) {
                return '1 item left'
              } else {
                return `${left} items left`
              }
            })
          )
          .UL($ =>
            $.class('filters')
              .LI($ =>
                $.A($ =>
                  $.href('#/')
                    .class(selectedF(Filter.All))
                    .onClick(changeF(Filter.All))
                    .text('All')
                )
              )
              .LI($ =>
                $.A($ =>
                  $.href('#/active')
                    .class(selectedF(Filter.Active))
                    .onClick(changeF(Filter.Active))
                    .text('Active')
                )
              )
              .LI($ =>
                $.A($ =>
                  $.href('#/completed')
                    .class(selectedF(Filter.Completed))
                    .onClick(changeF(Filter.Completed))
                    .text('Completed')
                )
              )
          )
          .When(
            s => s.completed > 0,
            $ =>
              $.BUTTON($ =>
                $.class('clear-completed')
                  .onClick(() => Action.clearCompleted)
                  .text('Clear completed')
              )
          )
      )
  ).FOOTER($ =>
    $.class('info')
      .P($ => $.text('Double-click to edit a todo'))
      .P($ =>
        $.text('Created by ')
          .A($ => $.href('http://github.com/fponticelli'))
          .text('Franco Ponticelli')
      )
      .P($ =>
        $.text('Part of ').A($ => $.href('http://todomvc.com').text('TodoMVC'))
      )
  )
)
