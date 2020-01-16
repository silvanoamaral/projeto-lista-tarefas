import { combineReducers } from 'redux'

import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { taskReducer } from './taskReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  taskReducer,
})

export default rootReducer