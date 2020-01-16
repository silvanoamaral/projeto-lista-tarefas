import axios from 'axios'

import { addTodo } from '../redux/actions'

export const getTask = (id = '') => {
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })

    axios.get(`/api/tasks`, { params: { id: id } })
    .then(response => {
      dispatch({ type: 'FETCH_TASK_SUCCESS', payload: response })
      dispatch(addTodo({ ...response.data }))
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_TASK_ERROR', payload: error.message })
    })
  }
}

export const registerTask = params => {
  console.log(typeof params)
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })

    axios.get(`/api/tasks/register`, { params: params  }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if(response.statusText === 'OK') {
        dispatch({ type: 'FETCH_TASK_SUCCESS', payload: response })
        dispatch(getTask())
      }
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_TASK_ERROR', payload: error.message })
    })
  }
}

export const updateTask = params => {
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })
    axios.get(`/api/tasks/update`, { params: params  }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if(response.statusText === 'OK') {
        dispatch({ type: 'FETCH_TASK_SUCCESS' })
        dispatch(getTask())
      }
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_TASK_ERROR', payload: error.message })
    })
  }
}