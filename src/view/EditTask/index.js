import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitEditTask } from '../../services'
import Form from '../../component/Form'

class EditTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      completed: false,
      description: '',
      durationTask: '',
      timeReminderTask: '',
      happingTask: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleCheckbox(event) {
    this.setState({
      completed: event.target.checked
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const params = {
      id: this.state.id,
      description: this.state.description,
      durationTask: this.state.durationTask,
      timeReminderTask: this.state.timeReminderTask,
      happingTask: this.state.happingTask,
      completed: this.state.completed
    }

    this.props.dispatch(submitEditTask(params))
  }

  componentDidMount() {
    const { data } = this.props
    const {
      id,
      completed,
      description,
      durationTask,
      timeReminderTask,
      happingTask
    } = data

    this.setState({
      id,
      completed: JSON.parse(completed),
      description,
      durationTask,
      timeReminderTask,
      happingTask
    })
  }

  render() {
    return (
      <>
        <h2>Editar tarefa</h2>
        <Form
          onSubmit={ this.handleSubmit }
          handleChange={ this.handleChange }
          handleCheckbox={ this.handleCheckbox }
          description={ this.state.description }
          durationTask={ this.state.durationTask }
          timeReminderTask={ this.state.timeReminderTask }
          happingTask={ this.state.happingTask }
          completed={ this.state.completed }
          isVisibleCheckbox={ true }
          labelButton="Atualizar tarefa"
        />
      </>
    )
  }
}

export default connect()(EditTask)