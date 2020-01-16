export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  //console.log('visibilityFilter', state)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
