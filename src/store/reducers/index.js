// @flow
import { combineReducers } from 'redux'
import prismic from './prismic.js'

const reducers = {
  prismic
}

const rootReducer = combineReducers(reducers)

export default rootReducer
