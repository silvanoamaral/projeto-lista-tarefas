import {
  TOGGLE_MODAL_OPEN,
  TOGGLE_MODAL_CLOSE,
} from '../actions/actionTypes'

const initialState = {
  description: '',
  durationTask: '',
  timeReminderTask: '',
  timeCreationTask: '',
  happingTask: '',
  completed: false,
  toggleModal: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_OPEN: {
      return {
        ...state = {...action.payload},
        toggleModal: true,
      }
    }
    case TOGGLE_MODAL_CLOSE: {
      return {
        ...state,
        toggleModal: false,
      }
    }
  }
  return state
}