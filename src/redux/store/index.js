import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reduces from '../reducers'

const middlewares = [thunk]

const store = createStore(reduces, applyMiddleware(...middlewares, logger))

export default store