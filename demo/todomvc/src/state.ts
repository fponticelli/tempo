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

// interface ITodo {
//   id: string,
//   title: string,
//   completed: boolean
// }

// interface ITodoItemProps {
//   key : string,
//   todo : ITodo;
//   editing? : boolean;
//   onSave: (val: any) => void;
//   onDestroy: () => void;
//   onEdit: ()  => void;
//   onCancel: (event : any) => void;
//   onToggle: () => void;
// }

// interface ITodoItemState {
//   editText : string
// }

// interface ITodoFooterProps {
//   completedCount : number;
//   onClearCompleted : any;
//   nowShowing : string;
//   count : number;
// }

// interface ITodoModel {
//   key : any;
//   todos : Array<ITodo>;
//   onChanges : Array<any>;
//   subscribe(onChange);
//   inform();
//   addTodo(title : string);
//   toggleAll(checked);
//   toggle(todoToToggle);
//   destroy(todo);
//   save(todoToSave, text);
//   clearCompleted();
// }

// interface IAppProps {
//   model : ITodoModel;
// }

// interface IAppState {
//   editing? : string;
//   nowShowing? : string
// }
