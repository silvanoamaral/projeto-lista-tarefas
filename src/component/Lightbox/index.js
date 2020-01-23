import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitEditTask } from '../../services'

class Lightbox extends Component {
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

  render() {
    const { dispatch, onClick } = this.props

    return (
      <div className="lightbox">
        <div className="lightbox__overlay"></div>
        <div className="content">
          <h3>Modal</h3>
          <form className="form-inline" onSubmit={ this.handleSubmit } >
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
            <label>
              <input
                type="checkbox"
                checked={ this.state.completed }
                onChange={ this.handleCheckbox }
              />
            </label>
            <button type="submit" className="btn btn-primary col-md-2">
              Atualizar tarefa
            </button>
          </form>
          
          <div className="btn">
            <button type="button" onClick={() => dispatch({ type: 'TOGGLE_MODAL_CLOSE' })} className="btn__not">Fechar Modal</button>
            <button type="button" className="btn__yes" onClick={() => onClick() }>Sim</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Lightbox)