// @flow
import { FETCH_DOCUMENT_COUNTS } from '../types'

export type FetchDocumentCounts = {
  type: typeof FETCH_DOCUMENT_COUNTS,
  count: number
}

export type Action =
| FetchDocumentCounts
