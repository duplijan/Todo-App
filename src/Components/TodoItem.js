import React from 'react';

const TodoItem = (props) => {
  const {todo, index} = props;
  return (
    <li>
      <input type='checkbox' onChange={(e) => props.toggleTodoDone(e, index)} checked={todo.done} /> {/*passed index of every single todo to find out which one was chacked*/}
      {/* add done class when the box is checked, todo.done is changed in the state */}
      <span className={todo.done ? 'done' : ''}> {todo.title} </span>
      <button className='delete_button'onClick={() => props.removeTodo(index) }>Remove</button>
    </li>
  )
}

export default TodoItem;
