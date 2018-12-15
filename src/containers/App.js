import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../store/actions'
//components
import NewTodo from '../components/NewTodo';
import ButtonsGroup from '../components/ButtonsGroup';
import TodoList from '../components/TodoList';

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.props.newTodo){
      return;
    }
    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    })
    this.props.onNewTodoChanged('');
  }

  toggleTodoDone = (e, index) => {
    this.props.onToggleDone({
      index,
      checked: e.target.checked
    })
  }

  removeTodo = (index) => {
    this.props.onDeleteTodo(index);
  }

  render() {
    const { newTodo, todos, onNewTodoChanged, onToggleAllDone, onDeleteAllTodos } = this.props;
    return (
      <div className="TodoApp">
        <h1 className='todo_heading'>TODOS</h1>
        <NewTodo
              handleChange={onNewTodoChanged}
              handleSubmit={this.handleSubmit}
              newTodo={newTodo} />
        <TodoList
              todos={this.props.todos}
              toggleTodoDone={this.toggleTodoDone}
              removeTodo={this.removeTodo}
        />
        <ButtonsGroup
              todos={todos}
              toggleAllDone={onToggleAllDone}
              deleteAllTodos={onDeleteAllTodos}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newTodo: state.newTodo,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewTodoChanged(newTodo){
      dispatch(actions.newTodoChanged(newTodo));
    },
    onAddTodo(todo){
      dispatch(actions.addTodo(todo))
    },
    onToggleDone(toggle){
      dispatch(actions.toggleDone(toggle))
    },
    onToggleAllDone(){
      dispatch(actions.toggleAllDone())
    },
    onDeleteTodo(index){
      dispatch(actions.deleteTodo(index))
    },
    onDeleteAllTodos(){
      dispatch(actions.deleteAllTodos())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
