// @flow
import prismic from 'prismic-javascript'
import type { ThunkAction } from './__types__'
import {
  PRISMIC_API_URL,
  PRISMIC_API_KEY
} from '../../config/env'

export const FETCH_DOCUMENT_COUNTS_SUCCESS = 'FETCH_DOCUMENT_COUNTS_SUCCESS'

export const addDocumentCounts = (): ThunkAction => (dispatch) => (
  prismic
  .getApi(PRISMIC_API_URL, {accessToken: PRISMIC_API_KEY})
  .then((api) => {
    return api.query(
      prismic.Predicates.at('document.type', 'manual-send'),
      { pageSize: 100 }
    )
  }).then((res) => {
    const { total_results_size: count } = res
    console.log(res.results.filter((doc) => (
      doc.data['content-text'].includes('{{%20databag.page.url%')
    )))

    dispatch({
      type: FETCH_DOCUMENT_COUNTS_SUCCESS,
      count
    })
  }).catch((err) => (console.log(err)))
)
