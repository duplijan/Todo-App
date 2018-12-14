import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos;
  const todo = todos.length ? (
    todos.map((todo, index) => {
      return (
        <TodoItem key={index}
                 todo={todo}
                 index={index}
                 toggleTodoDone={props.toggleTodoDone}
                 removeTodo={props.removeTodo}
        />
      )
    })
  ) :
  (
    <div className='message'>
      <h3> NO TODOS!</h3>
    </div>
  )
  return (
    <div className='todoList'>
      {todo}
    </div>
  )
}

export default TodoList;
