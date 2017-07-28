// @flow
import React, { Component } from 'react'
import numbro from 'numbro'
import PieChart from 'react-svg-piechart'
import type { PieChartData } from '../../store/actions/__types__'

class PrismicCount extends Component {
  handleMouseEnterOnSector: Function
  state: {
    expandedSector: number | null
  }

  constructor () {
    super()

    this.state = {
      expandedSector: null
    }

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
  }

  handleMouseEnterOnSector (sector: number | null) {
    this.setState({expandedSector: sector})
  }

  render () {
    const { documentTypes = [] }: {
      documentTypes: Array<PieChartData>
    } = this.props

    const { expandedSector } = this.state

    return (
      <div style={{maxWidth: '80vh'}}>
        <PieChart
          data={documentTypes}
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={1}
          expandOnHover
          shrinkOnTouchEnd
        />
        <div>
          {documentTypes.map((documentType, i) => (
            <div key={i}>
              <span style={{fontWeight: this.state.expandedSector === i ? 'bold' : null}}>
                {numbro(documentType.percentage).format('0.00')}% ({numbro(documentType.value).format('0,0')}) {documentType.label}
              </span>
            </div>
          ))}
          {numbro(documentTypes.reduce((acc, documentType) => (
            acc + documentType.value
          ), 0)).format('0,0')} documents total
        </div>
      </div>
    )
  }
}

export default PrismicCount
