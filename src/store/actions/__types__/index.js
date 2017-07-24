// @flow
import type { Dispatch } from 'redux'

export type FetchDocumentCountsSuccess = {
  type: 'FETCH_DOCUMENT_COUNTS_SUCCESS',
  count: number
}

export type Action =
| FetchDocumentCountsSuccess

export type ThunkAction = (
  dispatch: Dispatch<Action>,
  getState: () => Object,
  extraArgument: any) => any
