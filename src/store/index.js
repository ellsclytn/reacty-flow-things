// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewares = [
  thunk
]

export default (initialState: {} = {}) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
)
