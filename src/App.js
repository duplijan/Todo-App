import React, { Component } from 'react';
import NewTodo from './Components/NewTodo';
import ButtonsGroup from './Components/ButtonsGroup';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todos: [
        {
          title: 'Learn React',
          done: false
        },
        {
          title: 'Create Todo App',
          done: false
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectAllTodos = this.selectAllTodos.bind(this);
    this.unselectAllTodos = this.unselectAllTodos.bind(this);
    this.deleteAllTodos = this.deleteAllTodos.bind(this);
  }

  handleChange(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.newTodo){
      return;
    }

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })

  }

  toggleTodoDone(e, index){
    const todos = [...this.state.todos]; //create copy of the todos array
    todos[index] = {
          ...todos[index], // spreads all properties,  title: todo.title
          done: e.target.checked
    }; //create copy of the todo object and update done property, checked true, unchecked false
    this.setState({
      todos
    })
  }

  removeTodo(index){
    const todos = [...this.state.todos]; // copy array
    todos.splice(index, 1); // remove todo with specific index
    this.setState({
      todos
    })
  }

  deleteAllTodos(){
    this.setState({
      todos: []
    })
  }

  selectAllTodos(){
    // map over the todos array and set done to true for all of them => apply style line-through
    // only select the todos but not check boxes
    // to select checkboxes use checked={todo.done} on the checkbox
    const todos = this.state.todos.map( todo => {
      return {
        title: todo.title, // ...todo
        done: true
      }
    });
    this.setState({
      todos
    })
  }

  unselectAllTodos(){
    const todos = this.state.todos.map( todo => {
      return {
        title: todo.title,
        done: false
      }
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="TodoApp">
        <h1 className='todo_heading'>TODO'S</h1>
        <NewTodo handleChange={this.handleChange} handleSubmit={this.handleSubmit} newTodo={this.state.newTodo} />
        <TodoList todos={this.state.todos}
                    toggleTodoDone={this.toggleTodoDone}
                    removeTodo={this.removeTodo}
        />
        <ButtonsGroup selectAllTodos={this.selectAllTodos}
                      unselectAllTodos={this.unselectAllTodos}
                      deleteAllTodos={this.deleteAllTodos}
        />

      </div>
    );
  }
}

export default App;
