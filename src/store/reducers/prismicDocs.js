// @flow
import type { Action } from '../actions/__types__'
import { FETCH_DOCUMENT_COUNTS } from '../actions/types'

export type FetchedDocumentCount = {
  count: number
}

export default (state: {} = {}, action: Action) => {
  switch (action.type) {
    case FETCH_DOCUMENT_COUNTS:
      return {
        ...state,
        count: action.count
      }
    default:
      return state
  }
}
