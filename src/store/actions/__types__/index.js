// @flow
import type { Dispatch } from 'redux'

export type PrismicDocument = {
  type: string,
  description: string
}

export type PrismicDocumentCount = PrismicDocument & {
  color: string,
  count: number
}

export type PieChartData = {
  color: string,
  label: string,
  value: number,
  percentage: number
}

export type FetchDocumentCountsSuccess = {
  type: 'FETCH_DOCUMENT_COUNTS_SUCCESS',
  documentTypes: Array<PieChartData>
}

export type Action =
| FetchDocumentCountsSuccess

export type ThunkAction = (
  dispatch: Dispatch<Action>,
  getState: () => Object,
  extraArgument: any
) => any
