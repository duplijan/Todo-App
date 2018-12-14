import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, toggleTodoDone, removeTodo}) => {
  const todo = todos.length ? (
    todos.map((todo, index) => {
      return (
        <TodoItem key={index}
                 todo={todo}
                 index={index}
                 toggleTodoDone={toggleTodoDone}
                 removeTodo={removeTodo}
        />
      )
    })
  ) :
  (
    <div className='message'>
      <h3> You have learnt REDUX!!!</h3>
    </div>
  )
  return (
    <div className='todoList'>
      {todo}
    </div>
  )
}

export default TodoList;
