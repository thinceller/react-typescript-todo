import React from 'react';

type TodoFormProps = {
  setTodos: (newTodo: string) => void
};

type TodoFormState = {
  text: string
};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  state = { text: '' };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({ text: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.text === '') { return; }
    this.props.setTodos(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input className="TodoInput" type="text" onChange={this.handleChange} value={text} />
        <button className="TodoBtn" type="submit">追加</button>
      </form>
    );
  }
}

export default TodoForm;

