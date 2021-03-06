import { connect } from 'react-redux'
import TaskList from '../../component/TaskList'
import { VisibilityFilters } from '../../redux/actions'
import { completedTask, removeTask, editTask } from '../../services'

const getVisibleTask = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.data
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.data.filter(t => JSON.parse(t.completed))
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.data.filter(t => !JSON.parse(t.completed))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTask(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onEdit: id => dispatch(editTask(id)),
  onDelete: id => dispatch(removeTask(id)),
  toggleTodo: (id, completed) => dispatch(completedTask({id, completed}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)