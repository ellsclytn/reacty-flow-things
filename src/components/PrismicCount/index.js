// @flow
import React from 'react'
import type { PrismicDocumentMeta } from '../../store/actions/__types__'

const PrismicCount = ({
  documents = []
}: {
  documents: Array<PrismicDocumentMeta>
}) => (
  <div>
    {documents.map((doc, i) => (
      <p key={i}>{doc.count} of {doc.description}</p>
    ))}
  </div>
)

export default PrismicCount
