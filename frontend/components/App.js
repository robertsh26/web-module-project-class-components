import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id

const intialTodos = [
  { id: getId(), name: "Walk the dog", completed: false},
  { id: getId(), name: "Learn React", completed: false},
  { id: getId(), name: "Learn Javascript", completed: false},
]

export default class App extends React.Component {

  state = {
    todos: intialTodos,
    showAll: true
  }

  toggleShowAll = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll,
      todos: prevState.todos.map(todo => ({
        ...todo,
        hidden: prevState.showAll ? todo.completed : false
      }))
    }));
  };

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }

  render() {
    const { todos, showAll } = this.state;
    const filtered = showAll ? todos : todos.filter(td => !td.completed);

    return (
      <div>
        <TodoList  todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleShowAll}>{showAll ? "Hide Completed" : "Show All"}</button>
      </div>
    )
  }
}
