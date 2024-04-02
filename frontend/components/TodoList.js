import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompletion } = this.props;
    const filteredTodos = todos.filter(todo => !todo.hidden);

    return (
      <div>
        {filteredTodos.map(todo => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
      </div>
    );
  }
}
