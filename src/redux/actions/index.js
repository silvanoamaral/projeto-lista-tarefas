let nextTodoId = 0;
export const addTodo = data => {
  //console.info('Redux > Action > index.js - value:', data)
  return {
    type: 'ADD_TODO',
    ...data
  }
}

export const setVisibilityFilter = filter => {
  //console.log('setVisibilityFilter',filter)
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}