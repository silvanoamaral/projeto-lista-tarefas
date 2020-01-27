import React from 'react'
import mask from '../../utils/mask'

const Form = props => {
  return <>
    <form className="form-inline" onSubmit={ props.onSubmit } >
      <input
        className="form-control col-md-10"
        name="description"
        value={ props.description }
        placeholder="description"
        onChange={ props.handleChange }
      />
      <input
        name="durationTask"
        value={ mask.dateMask(props.durationTask) }
        placeholder="Duração da tarefa"
        onChange={ props.handleChange }
        maxLength="10"
      />
      <input
        name="timeReminderTask"
        value={ props.timeReminderTask }
        placeholder="Tempo para lembrete da tarefa"
        onChange={ props.handleChange }
      />
      <input
        name="happingTask"
        value={ mask.dateMask(props.happingTask) }
        placeholder="Data e hora que a tarefa acontecerá"
        onChange={ props.handleChange }
        maxLength="10"
      />
      {props.isVisibleCheckbox &&
        <label>
          <input
            type="checkbox"
            checked={ props.completed }
            onChange={ props.handleCheckbox }
          />
        </label>
      }
      
      <button type="submit" className="btn btn-primary col-md-2">
        {props.labelButton}
      </button>
    </form>
  </>
}

export default Form