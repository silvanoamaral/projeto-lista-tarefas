import React from 'react'

import EditIcon from '../../component/iconMonstr/EditIcon'
import TrashIcon from '../../component/iconMonstr/TrashIcon'

const Task = ({
  onEdit,
  onDelete,
  onClick,
  id,
  completed,
  description,
  happingTask,
  timeCreationTask,
  durationTask,
  timeReminderTask
}) => (
  <>
  <li
    onClick={onClick}
    data-completed={completed}
    style={{
      textDecoration: JSON.parse(completed) ? 'line-through' : 'none'
    }}
  >
    <p>ID: { id }</p>
    <p>Descrição:. {description}</p>
    <p>happingTask: {happingTask}</p>
    <p>Data e hora da criação da tarefa {timeCreationTask}</p>
    <p>durationTask: {durationTask}</p>
    <p>Tempo para lembrete da tarefa: {timeReminderTask}</p>
    
  </li>
  <p onClick={ onDelete }><TrashIcon /></p>
  <p onClick={ onEdit }><EditIcon /></p>
  </>
)

export default Task