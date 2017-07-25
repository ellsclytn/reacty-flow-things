// @flow
import type { Action } from '../actions/__types__'
import { FETCH_DOCUMENT_COUNTS_SUCCESS } from '../actions/prismic'

export default (state: {} = {}, action: Action) => {
  switch (action.type) {
    case FETCH_DOCUMENT_COUNTS_SUCCESS:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}
