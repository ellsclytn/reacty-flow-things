// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDocumentCounts } from '../../store/actions/prismic'
import type { FetchedDocumentCount } from '../../store/reducers/prismicDocs'

class PrismicCount extends Component {
  componentDidMount () {
    this.props.addDocumentCounts()
  }

  renderDocumentCount () {
    const { prismicDocs } = this.props

    if (prismicDocs && prismicDocs.count) {
      return prismicDocs.count
    }
  }

  render () {
    return (
      <div>
        Hi there.
        {this.renderDocumentCount()}
      </div>
    )
  }
}

const mapStateToProps = ({
  prismicDocs
}: {
  prismicDocs?: FetchedDocumentCount
}) => ({ prismicDocs })
const mapDispatchToProps = { addDocumentCounts }

export default connect(mapStateToProps, mapDispatchToProps)(PrismicCount)
