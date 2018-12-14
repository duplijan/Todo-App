import React from 'react';

const TodoItem = ({todo, index, toggleTodoDone, removeTodo}) => {
  return (
    <div className='todoItem' key={todo}>
      <input
          type='checkbox'
          onChange={(e) => toggleTodoDone(e, index)}
          checked={todo.done}
      />
      <span className={todo.done ? 'done' : ''}> {todo.title} </span>
      <button className='delete_button' onClick={() => removeTodo(index)}>Remove</button>
    </div>
  )
}

export default TodoItem;
