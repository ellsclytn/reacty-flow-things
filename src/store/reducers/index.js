// @flow
import { combineReducers } from 'redux'
import prismicDocs from './prismicDocs.js'

const reducers = {
  prismicDocs
}

const rootReducer = combineReducers(reducers)

export default rootReducer
