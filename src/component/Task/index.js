import React from 'react'

const Task = ({
  onClick,
  completed,
  description,
  happingTask,
  timeCreationTask,
  durationTask,
  timeReminderTask
}) => (

  <li
    onClick={onClick}
    data-completed={completed}
    style={{
      textDecoration: JSON.parse(completed) ? 'line-through' : 'none'
    }}
  >
    <p>Descrição:. {description}</p>
    <p>happingTask: {happingTask}</p>
    <p>Data e hora da criação da tarefa {Date(timeCreationTask)}</p>
    <p>durationTask: {durationTask}</p>
    <p>Tempo para lembrete da tarefa: {timeReminderTask}</p>
  </li>
)

export default Task