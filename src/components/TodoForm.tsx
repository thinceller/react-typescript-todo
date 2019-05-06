import React, { useState } from 'react';

type TodoFormProps = {
  setTodos: (newTodo: string) => void
};

const TodoForm: React.FC<TodoFormProps> = ({ setTodos }) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === '') { return; }
    setTodos(text);
    setText('');
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input className="TodoInput" type="text" onChange={handleChange} value={text} />
      <button className="TodoBtn" type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
