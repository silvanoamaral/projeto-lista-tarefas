import React, { Component } from 'react'
import { connect } from 'react-redux'

import { registerTask } from '../../services'
import Form from '../../component/Form'

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
    return <>
      <h2>Adicionar tarefa</h2>
      <Form
        onSubmit={ this.handleSubmit }
        handleChange={ this.handleChange }
        handleCheckbox={ this.handleCheckbox }
        description={ this.state.description }
        durationTask={ this.state.durationTask }
        timeReminderTask={ this.state.timeReminderTask }
        happingTask={ this.state.happingTask }
        completed={ this.state.completed }
        isVisibleCheckbox={ false }
        labelButton="Adicionar tarefa"
      />
    </>
  }
}

export default connect()(AddTodo)