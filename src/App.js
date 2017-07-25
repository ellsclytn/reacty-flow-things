// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDocumentCounts } from './store/actions/prismic'
import type { FetchDocumentCountsSuccess } from './store/actions/__types__'
import PrismicCount from './components/PrismicCount'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.addDocumentCounts()
  }

  render () {
    const { prismic = {} } = this.props

    return (
      <div className='App'>
        { prismic.documentTypes ? <PrismicCount documentTypes={prismic.documentTypes} /> : null }
      </div>
    )
  }
}

const mapStateToProps = ({
  prismic
}: {
  prismic?: FetchDocumentCountsSuccess
}) => ({ prismic })
const mapDispatchToProps = { addDocumentCounts }

export default connect(mapStateToProps, mapDispatchToProps)(App)
