import {
  FETCH_TASK_ERROR,
  FETCH_TASK_PENDING,
  FETCH_TASK_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  fetching: false,
  fetched: false,
  task: [],
  error: null
}

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        task: action.payload,
      }
    case FETCH_TASK_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case FETCH_TASK_PENDING:
      return {
        ...state,
        fetching: true
      }
  }
  return state
}