import axios from 'axios'

import { addTodo } from '../redux/actions'

//Recebe todas ou apenas uma tarefa 
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

//Registrar uma tarefa
export const registerTask = params => {
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

//Remove apenas uma tarefa
export const removeTask = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })

    axios.get(`/api/tasks/delete`, { params: {id}  }, {
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

//Atualiza status da tarefa
export const completedTask = params => {
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })
    axios.get(`/api/tasks/completed`, { params: params  }, {
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

//Abrir o modal com dados no formulário para editar 
export const editTask = id => {
  return dispatch => {
    dispatch({ type: 'FETCH_TASK_PENDING' })
    axios.get(`/api/tasks`, { params: { id: id } })
    .then(response => { 
      if(response.status === 200) {
        dispatch({ type: 'FETCH_TASK_SUCCESS' })
        dispatch({ type: 'TOGGLE_EDIT' })
        dispatch({ type: 'TOGGLE_MODAL_OPEN', payload: {...response.data }})
      }
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_TASK_ERROR', payload: error.message })
    })
  }
}

//Submit Form para editar todos os campos da tarefa
export const submitEditTask = params => {
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
        //console.log('message:..', response.data.message)
        dispatch({ type: 'FETCH_TASK_SUCCESS' })
        dispatch(getTask())
      }
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_TASK_ERROR', payload: error.message })
    })
  }
}