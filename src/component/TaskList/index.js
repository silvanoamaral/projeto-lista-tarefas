import React from 'react'
import Task from '../Task'

const TaskList = ({ todos, toggleTodo }) => (
  <>
    {todos && <p>Total: {todos.length}</p>}
    <ul>
      {todos && todos.map(todo => (
        <Task key={todo.id || 0} { ...todo } onClick={() => toggleTodo(todo.id, !JSON.parse(todo.completed))} />
      ))}
    </ul>
  </>
)

export default TaskList