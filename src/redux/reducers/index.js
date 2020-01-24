import { combineReducers } from 'redux'

import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { taskReducer } from './taskReducer'
import { modalReducer } from './modalReducer'
import { typeFormReducer } from './typeFormReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  taskReducer,
  modalReducer,
  typeFormReducer,
})

export default rootReducer