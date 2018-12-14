import React from 'react';

const NewTodo = ({newTodo, handleSubmit, handleChange}) => {
  return (
    <div className='newTodo'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-todo'>
          What is needed to be done?
        </label><br />
        <input
            id='new-todo'
            name='newTodo'
            onChange={(e) => handleChange(e.target.value)}
            value={newTodo}
            placeholder='new todo...' />
        <button
            type='submit'
            className='addTodo_button'>
          Add Todo!
        </button>
      </form>
    </div>
  )
}
export default NewTodo;
