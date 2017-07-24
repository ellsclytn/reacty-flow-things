// @flow
import { FETCH_DOCUMENT_COUNTS } from './types'

export const addDocumentCounts = () => (dispatch: Function) => (
  setTimeout(() => (
    dispatch({
      type: FETCH_DOCUMENT_COUNTS,
      count: 1
    })
  ), 5000)
)
