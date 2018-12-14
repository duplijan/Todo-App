import React from 'react';

const ButtonsGroup = ({toggleAllDone, deleteAllTodos}) => {
  return (
    <div className='buttons_group'>
      <button onClick={toggleAllDone}>Select All</button>
      <button onClick={deleteAllTodos}>Delete All</button>
    </div>
  )
}
export default ButtonsGroup;
