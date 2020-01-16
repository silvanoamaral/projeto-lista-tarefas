import React, { Component } from 'react'
import { connect } from 'react-redux'

import { registerTask } from '../../services'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      durationTask: '',
      timeReminderTask: '',
      happingTask: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { description, durationTask, timeReminderTask, happingTask } = this.state
    const data = { description, timeCreationTask: Date(), durationTask, timeReminderTask, happingTask, completed: false }

    if (!this.state.description.trim()) {
      return
    }
    this.props.dispatch(registerTask(data))
    
    this.state.description = ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return <div>
      <form className="form-inline" onSubmit={this.handleSubmit} >
        <input
          className="form-control col-md-10"
          name="description"
          value={ this.state.description }
          placeholder="description"
          onChange={ this.handleChange }
        />
        <input
          name="durationTask"
          value={ this.state.durationTask }
          placeholder="Data e hora que a tarefa acontecerá"
          onChange={ this.handleChange }
        />
        <input
          name="timeReminderTask"
          value={ this.state.timeReminderTask }
          placeholder="Tempo para lembrete da tarefa"
          onChange={ this.handleChange }
        />
        <input
          name="happingTask"
          value={ this.state.happingTask }
          placeholder="Data e hora que a tarefa acontecerá"
          onChange={ this.handleChange }
        />
        <button type="submit" className="btn btn-primary col-md-2">
          Add
        </button>
      </form>
    </div>
  }
}

export default connect()(AddTodo)