import React from 'react';

type TodoListProps = {
  todos: string[]
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <li className="TodoItem" key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
