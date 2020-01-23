export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...action
      }
    case 'TOGGLE_TODO':
      //console.log('Reducers > TOGGLE_TODO', state, action)
      /* return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      ) */
    default:
      return state
  }
}