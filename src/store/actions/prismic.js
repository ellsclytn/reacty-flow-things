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
  description: 'Phase 2 (Days since page activated)',
  color: '#2ecc71'
}, {
  type: 'days-until-event-start',
  description: 'Phase 4 (Days until event start)',
  color: '#3498db'
}, {
  type: 'dollar-milestone',
  description: 'Phase 6 (Donation value milestone)',
  color: '#9b59b6'
}, {
  type: 'donation-received',
  description: 'Transactional (Donation received)',
  color: '#f1c40f'
}, {
  type: 'fitness-distance-milestone',
  description: 'Phase 6 (Fitness distance milestone)',
  color: '#e67e22'
}, {
  type: 'inactive-page',
  description: 'BAT (Inactive page)',
  color: '#e74c3c'
}, {
  type: 'manual-send',
  description: 'Manual send via Robot Emma',
  color: '#1abc9c'
}, {
  type: 'milestone-percentage',
  description: 'Phase 6 (Donation percentage milestone)',
  color: '#2ecc71'
}, {
  type: 'page-activation',
  description: 'Phase 1 (Days since page activated)',
  color: '#e67e22'
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
    .map(({ description, count, color }) => ({
      label: description,
      value: count,
      color: color,
      percentage: count / total * 100
    }))
    .sort((a, b) => (b.value - a.value))

    dispatch({
      type: FETCH_DOCUMENT_COUNTS_SUCCESS,
      documentTypes
    })
  })
)
