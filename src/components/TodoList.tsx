import React from 'react';

type TodoListProps = {
  todos: string[]
}

class TodoList extends React.Component<TodoListProps> {
  render() {
    const { todos } = this.props;

    return (
      <ul className="TodoList">
        {todos.map((todo, index) => (
          <li className="TodoItem" key={index}>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
