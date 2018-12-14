import { initState } from './state'
import { NEW_TODO_CHANGED, ADD_TODO, TOGGLE_DONE, TOGGLE_ALL_DONE, DELETE_TODO, DELETE_ALL_TODOS} from './actions'

export function reducer(state = initState, action) {
  switch(action.type){
    case NEW_TODO_CHANGED: {
      return {
        ...state,
        newTodo: action.newTodo
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    }
    case TOGGLE_DONE: {
      const todos = [...state.todos]; //create copy of the todos
      //checked todo with index
      todos[action.toggle.index] = {
            ...todos[action.toggle.index],
            done: action.toggle.checked
      };
      return {
        ...state,
        todos
      }
    }
    case TOGGLE_ALL_DONE: {
      const todos = state.todos.map( todo => {
        return {
          title: todo.title,
          done: !todo.done
        }
      })
      return {
        ...state,
        todos
      }
    }
    case DELETE_TODO: {
      const todos = [...state.todos];
      todos.splice(action.index, 1);
      return {
        ...state,
        todos
      }
    }
    case DELETE_ALL_TODOS: {
      return {
        ...state,
        todos: []
      }
    }
    default:
    return state
  }

}
