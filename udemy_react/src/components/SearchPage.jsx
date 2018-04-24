// コンテナコンポーネント

import React, { Component } from 'react'
import Proptypes from 'prop-types'
import queryString from 'query-string'
import { connect } from 'react-redux'
import SearchForm from '../containers/SearchForm'
import GeocodeResult from './GeocodeResult'
import Map from './Map'
import HotelsTable from './HotelsTable'


class SearchPage extends Component {
  getPlaceParam() {
    // props には ReactRouterの機能でlocationの情報が渡されている
    const { place } = queryString.parse(this.props.location.search)
    if (place && place.length > 0) {
      return place
    }
    return null
  }

  // handlePlaceSubmit(e) {
  //   e.preventDefault()
  //   this.props.history.push(`/?place=${this.state.place}`)
  //   this.startSearch()
  // }

  render() {
    console.log(this.props)

    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm />

        <div className="result-area">
          <Map location={this.props.geocodeResult.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.props.geocodeResult.address}
              location={this.props.geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    )
  }
}

SearchPage.propTypes = {
  location: Proptypes.shape({ search: Proptypes.string }).isRequired,
  geocodeResult: Proptypes.shape({
    address: Proptypes.string,
    location: Proptypes.shape({
      lat: Proptypes.number.isRequired,
      lng: Proptypes.number.isRequired,
    }),
  }).isRequired,
}

// state をもらって props を返す純粋関数
const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
})

export default connect(mapStateToProps)(SearchPage)
