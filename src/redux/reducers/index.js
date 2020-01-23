import { combineReducers } from 'redux'

import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { taskReducer } from './taskReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  taskReducer,
  modalReducer,
})

export default rootReducer