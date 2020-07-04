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

import { fragment } from 'tempo-dom/lib/html'
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

export const template = fragment<State, Action, unknown>($ =>
  $.section($ =>
    $.class('todoapp')
      .div($ =>
        $.header($ =>
          $.class('header')
            .h1($ => $.text('todos'))
            .inputText($ =>
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
        ).section($ =>
          $.class('main')
            .style('visibility', s => (s.todos.length === 0 ? 'hidden' : ''))
            .inputCheckbox($ =>
              $.id('toggle-all')
                .class('toggle-all')
                .checked(s => s.completed === s.todos.length)
                .onClick(() => Action.toggleAllTodo)
            )
            .labelEl($ => $.for('toggle-all').text('Mark all as complete'))
            .ul($ =>
              $.class('todo-list').iterate(
                s => s.filtered,
                $ =>
                  $.li($ =>
                    $.class(([todo, state]) => ({
                      completed: todo.completed,
                      editing: isEditing(state, todo)
                    }))
                      .div($ =>
                        $.class('view')
                          .inputCheckbox($ =>
                            $.class('toggle')
                              .checked(([todo]) => todo.completed)
                              .onChange(([todo]) => Action.toggleTodo(todo.id))
                          )
                          .labelEl($ =>
                            $.onDblClick(([todo]) =>
                              Action.editingTodo(todo.id, todo.title)
                            ).text(([todo]) => todo.title)
                          )
                          .button($ =>
                            $.class('destroy').onClick(([todo]) =>
                              Action.removeTodo(todo.id)
                            )
                          )
                      )
                      .when(
                        ([todo, state]) => isEditing(state, todo),
                        $ =>
                          $.inputText($ =>
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
      .footer($ =>
        $.class('footer')
          .style('display', s => (s.todos.length === 0 ? 'none' : 'block'))
          .spanEl($ =>
            $.class('todo-count').text(s => {
              const left = s.todos.length - s.completed
              if (left === 1) {
                return '1 item left'
              } else {
                return `${left} items left`
              }
            })
          )
          .ul($ =>
            $.class('filters')
              .li($ =>
                $.a($ =>
                  $.href('#/')
                    .class(selectedF(Filter.All))
                    .onClick(changeF(Filter.All))
                    .text('All')
                )
              )
              .li($ =>
                $.a($ =>
                  $.href('#/active')
                    .class(selectedF(Filter.Active))
                    .onClick(changeF(Filter.Active))
                    .text('Active')
                )
              )
              .li($ =>
                $.a($ =>
                  $.href('#/completed')
                    .class(selectedF(Filter.Completed))
                    .onClick(changeF(Filter.Completed))
                    .text('Completed')
                )
              )
          )
          .when(
            s => s.completed > 0,
            $ =>
              $.button($ =>
                $.class('clear-completed')
                  .onClick(() => Action.clearCompleted)
                  .text('Clear completed')
              )
          )
      )
  ).footer($ =>
    $.class('info')
      .p($ => $.text('Double-click to edit a todo'))
      .p($ =>
        $.text('Created by ')
          .a($ => $.href('http://github.com/fponticelli'))
          .text('Franco Ponticelli')
      )
      .p($ =>
        $.text('Part of ').a($ => $.href('http://todomvc.com').text('TodoMVC'))
      )
  )
)
