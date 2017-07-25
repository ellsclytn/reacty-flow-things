// @flow
import React from 'react'
import numbro from 'numbro'
import type { PrismicDocumentMeta } from '../../store/actions/__types__'

const PrismicCount = ({
  documentTypes = []
}: {
  documentTypes: Array<PrismicDocumentMeta>
}) => (
  <div>
    {documentTypes.map((doc, i) => (
      <p key={i}>{numbro(doc.count).format('0,0')} ({numbro(doc.percentage).format('0.00')}%) of {doc.description}</p>
    ))}
  </div>
)

export default PrismicCount
