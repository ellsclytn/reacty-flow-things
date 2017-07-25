// @flow
import type { Dispatch } from 'redux'

export type PrismicDocument = {
  type: string,
  description: string
}

export type PrismicDocumentMeta = PrismicDocument & { count: number }

export type FetchDocumentCountsSuccess = {
  type: 'FETCH_DOCUMENT_COUNTS_SUCCESS',
  documents: Array<PrismicDocumentMeta>
}

export type Action =
| FetchDocumentCountsSuccess

export type ThunkAction = (
  dispatch: Dispatch<Action>,
  getState: () => Object,
  extraArgument: any) => any
