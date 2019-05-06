import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const initialTodos = ['task1', 'task2'];

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(initialTodos);

  const handleFormSubmit = (newTodo: string) => {
    setTodos(todos.concat(newTodo));
  };

  return (
    <div className="TodoApp">
      <div className="title">Todoリスト</div>
      <TodoList todos={todos} />
      <TodoForm setTodos={handleFormSubmit} />
    </div>
  );
}

export default App;
