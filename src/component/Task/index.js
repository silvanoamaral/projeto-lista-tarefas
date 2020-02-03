import React from 'react'

import EditIcon from '../../component/iconMonstr/EditIcon'
import TrashIcon from '../../component/iconMonstr/TrashIcon'

const formatDate = date => {
  const d = new Date(date)
  return d.toString()
}

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
  <li className="list__card">
    <div
      className="task"
      data-completed={completed}
      style={{
        textDecoration: JSON.parse(completed) ? 'line-through' : 'none'
      }}
    >
      <p>ID: { id }</p>
      <p>Descrição:. {description}</p>
      <p>happingTask: {formatDate(happingTask)}</p>
      <p>Data e hora da criação da tarefa {timeCreationTask}</p>
      <p>durationTask: {durationTask}</p>
      <p>Tempo para lembrete da tarefa: {timeReminderTask}</p>
    </div>
    <label className="checked">
      <input
        type="checkbox"
        defaultChecked={JSON.parse(completed)}
        onClick={onClick}
      />
      Tarefa concluída
      <span class="checkmark"></span>
    </label>
    <div className="list__card-btn">
      <p onClick={ onDelete }><TrashIcon /></p>
      <p onClick={ onEdit }><EditIcon /></p>
    </div>
  </li>
)

export default Task