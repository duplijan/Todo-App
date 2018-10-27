import React from 'react';

const ButtonsGroup = (props) => {
  return (
    <div className='buttons_group'>
      <button onClick={props.selectAllTodos}>Select All</button>
      <button onClick={props.unselectAllTodos}>UnSelect All</button>
      <button onClick={props.deleteAllTodos}>Delete All</button>
    </div>
  )
}
export default ButtonsGroup;
