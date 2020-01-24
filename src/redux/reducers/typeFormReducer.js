import {
  TOGGLE_EDIT,
  TOGGLE_ADD
} from '../actions/actionTypes'

const initialState = {
  editTask: false,
  addTask: false
}

export const typeFormReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {    
    case TOGGLE_EDIT: {
      return {
        addTask: false,
        editTask: true,
      }
    }
    case TOGGLE_ADD: {
      return {
        editTask: false,
        addTask: true,
      }
    }
  }
  return state
}