import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const initialTodos = ['task1', 'task2'];

type AppState = {
  todos: string[]
};

class App extends React.Component<{}, AppState> {
  state = { todos: initialTodos };

  handleFormSubmit = (newTodo: string) => {
    const todos = this.state.todos.slice();
    this.setState({ todos: todos.concat(newTodo) });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="TodoApp">
        <div className="title">Todoリスト</div>
        <TodoList todos={todos} />
        <TodoForm setTodos={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
