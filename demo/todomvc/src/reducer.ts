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

import { State, createTodo, Todo, Filter } from './state'
import { Action } from './action'
import { mapArray } from 'tempo-std/lib/arrays'

const filterF = (filter: Filter) => {
  if (filter === Filter.All) {
    return (_: Todo) => true
  } else if (filter === Filter.Completed) {
    return (todo: Todo) => todo.completed
  } else {
    return (todo: Todo) => !todo.completed
  }
}

const filterTodos = (todos: Todo[], filter: Filter) => {
  return todos.filter(filterF(filter))
}

export const reducer = (state: State, action: Action) => {
  switch (action.kind) {
    case 'adding-todo':
      if (action.title) {
        return {
          ...state,
          adding: action.title
        }
      } else {
        return {
          ...state,
          adding: undefined
        }
      }
    case 'create-todo':
      if (action.title) {
        const todos = state.todos.concat([createTodo(action.title)])
        const filtered = filterTodos(todos, state.filter)
        return {
          ...state,
          todos,
          filtered,
          completed: todos.filter(todo => todo.completed).length,
          adding: undefined
        }
      } else {
        return {
          ...state,
          adding: undefined
        }
      }
    case 'editing-todo':
      return {
        ...state,
        editing: { id: action.id, title: action.title }
      }
    case 'cancel-adding-todo':
      return {
        ...state,
        adding: undefined
      }
    case 'cancel-editing-todo':
      return {
        ...state,
        editing: undefined
      }
    case 'clear-completed':
      const todos = state.todos.filter(v => !v.completed)
      const filtered = filterTodos(todos, state.filter)
      return {
        ...state,
        completed: 0,
        filtered,
        todos
      }
    case 'remove-todo':
      const todos2 = state.todos.filter(v => v.id !== action.id)
      const filtered2 = filterTodos(todos2, state.filter)
      return {
        ...state,
        completed: todos2.filter(todo => todo.completed).length,
        todos: todos2,
        filtered: filtered2
      }
    case 'toggle-completed':
      const index = state.todos.findIndex(v => v.id === action.id)
      const current = state.todos[index]
      const todo = { ...current, completed: !current.completed }
      const todos3 = [
        ...state.todos.slice(0, index),
        todo,
        ...state.todos.slice(index + 1)
      ]
      const filtered3 = filterTodos(todos3, state.filter)
      return {
        ...state,
        completed: todos3.filter(todo => todo.completed).length,
        todos: todos3,
        filtered: filtered3
      }
    case 'toggle-all-todo':
      const allCompleted = state.completed === state.todos.length
      const todos4 = mapArray(state.todos, todo => {
        if (todo.completed !== allCompleted) {
          return todo
        } else {
          return {
            ...todo,
            completed: !allCompleted
          }
        }
      })
      const filtered4 = filterTodos(todos4, state.filter)
      return {
        ...state,
        todos: todos4,
        filtered: filtered4,
        completed: allCompleted ? 0 : state.todos.length
      }
    case 'toggle-filter':
      const filtered5 = filterTodos(state.todos, action.filter)
      return {
        ...state,
        filtered: filtered5,
        filter: action.filter
      }
    case 'update-todo':
      const index2 = state.todos.findIndex(o => o.id === action.id)
      if (index2 >= 0) {
        const updated = {
          id: action.id,
          title: action.title,
          completed: state.todos[index2].completed
        }
        const todos = [
          ...state.todos.slice(0, index2),
          updated,
          ...state.todos.slice(index2 + 1)
        ]
        const filtered = filterTodos(todos, state.filter)
        return {
          ...state,
          editing: undefined,
          completed: todos.filter(todo => todo.completed).length,
          todos,
          filtered
        }
      } else {
        return {
          ...state,
          editing: undefined
        }
      }
    default:
      throw 'unreacheable code'
  }
}
