import React from 'react';

const NewTodo = (props) => {
  return (
    <div className='newTodo'>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor='new-todo'>
          What is needed to be done?
        </label><br />
        <input id='new-todo' onChange={props.handleChange} value={props.newTodo} type='text' placeholder='new todo...' />
        <button type='submit' className='addTodo_button'>
          Add Todo!
        </button>
      </form>
    </div>
  )
}
export default NewTodo;
