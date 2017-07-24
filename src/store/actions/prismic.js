// @flow
import type { ThunkAction } from './__types__'

export const FETCH_DOCUMENT_COUNTS_SUCCESS = 'FETCH_DOCUMENT_COUNTS_SUCCESS'

export const addDocumentCounts = (): ThunkAction => (dispatch) => (
  setTimeout(() => (
    dispatch({
      type: FETCH_DOCUMENT_COUNTS_SUCCESS,
      count: 1
    })
  ), 5000)
)
