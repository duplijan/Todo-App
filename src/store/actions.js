export const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const TOGGLE_ALL_DONE = 'TOGGLE_ALL_DONE';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';

export const actions = {
  newTodoChanged(newTodo){
    return {
      type: NEW_TODO_CHANGED,
      newTodo
    }
  },
  addTodo(todo){
    return {
      type: ADD_TODO,
      todo
    }
  },
  //toggle has index and checked value
  toggleDone(toggle){
    return {
      type: TOGGLE_DONE,
      toggle
    }
  },
  toggleAllDone(){
    return {
      type: TOGGLE_ALL_DONE,
    }
  },
  deleteTodo(index){
    return {
      type: DELETE_TODO,
      index
    }
  },
  deleteAllTodos(){
    return {
      type: DELETE_ALL_TODOS,
    }
  },
}
