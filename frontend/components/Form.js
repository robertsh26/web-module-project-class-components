import React from 'react'

export default class Form extends React.Component {
  state = {
    name: ''
  }

  onChange = evt => {
    const {value} = evt.target
    this.setState({
      ...this.state,
      name: value
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ""
    })
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} onChange={this.onChange} />
        <input type='submit' />
      </form>
    )
  }
}
