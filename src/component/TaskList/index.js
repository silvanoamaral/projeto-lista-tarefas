import React from 'react'
import Task from '../Task'

const TaskList = ({ todos, toggleTodo, onDelete }) => (
  <>
    {todos && <p>Total: {todos.length}</p>}
    <ul>
      {todos && todos.map(todo => (
        <Task
          key={todo.id}
          { ...todo }
          onDelete={() => onDelete(todo.id)}
          onClick={() => toggleTodo(todo.id, !JSON.parse(todo.completed))}
        />
      ))}
    </ul>
  </>
)

export default TaskList