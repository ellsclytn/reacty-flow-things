// @flow
import prismic from 'prismic-javascript'
import type {
  PrismicDocument,
  PrismicDocumentCount,
  PieChartData,
  ThunkAction
} from './__types__'
import {
  PRISMIC_API_URL,
  PRISMIC_API_KEY
} from '../../config/env'

export const FETCH_DOCUMENT_COUNTS_SUCCESS = 'FETCH_DOCUMENT_COUNTS_SUCCESS'

const documentTypes: Array<PrismicDocument> = [{
  type: 'days-since-activated',
  description: 'Phase 2 (Days since page activated)'
}, {
  type: 'dollar-milestone',
  description: 'Phase 6 (Donation value milestone)'
}, {
  type: 'donation-received',
  description: 'Transactional (Donation received)'
}, {
  type: 'fitness-distance-milestone',
  description: 'Phase 6 (Fitness distance milestone)'
}, {
  type: 'inactive-page',
  description: 'BAT (Inactive page)'
}, {
  type: 'milestone-percentage',
  description: 'Phase 6 (Donation percentage milestone)'
}, {
  type: 'page-activation',
  description: 'Phase 1 (Days since page activated)'
}]

const fetchPrismicCount = (document: PrismicDocument) => (
  prismic
  .getApi(PRISMIC_API_URL, {accessToken: PRISMIC_API_KEY})
  .then((api) => {
    return api.query(
      prismic.Predicates.at('document.type', document.type),
      { pageSize: 1 }
    )
  })
  .then((res: { total_results_size: number }) => {
    const { total_results_size: count } = res

    return {
      ...document,
      count
    }
  })
  .catch((err) => (console.log(err)))
)

export const addDocumentCounts = (): ThunkAction => (dispatch) => (
  Promise.all(documentTypes.map(fetchPrismicCount))
  .then((documentCounts: Array<PrismicDocumentCount>) => {
    const total = documentCounts.reduce((acc, prismicDocument) => (
      acc + prismicDocument.count
    ), 0)

    const documentTypes: Array<PieChartData> = documentCounts
    .map(({ description, count }) => ({
      label: description,
      value: count,
      percentage: count / total * 100
    }))
    .sort((a, b) => (b.value - a.value))

    dispatch({
      type: FETCH_DOCUMENT_COUNTS_SUCCESS,
      documentTypes
    })
  })
)
