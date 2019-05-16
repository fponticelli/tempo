import { Utils } from './utils'

export enum Filter {
  All,
  Active,
  Completed
}

export interface State {
  adding?: string
  editing?: TodoEdit
  filter: Filter
  todos: Todo[]
}

export interface TodoEdit {
  id: string
  title: string
}

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export const createTodo = (title: string): Todo => ({
  id: Utils.uuid(),
  title,
  completed: false
})
