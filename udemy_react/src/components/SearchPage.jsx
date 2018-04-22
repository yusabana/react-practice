import React, { Component } from 'react'
import Proptypes from 'prop-types'
import _ from 'lodash'
import queryString from 'query-string'

import SearchForm from './SearchForm'
// import GeocodeResult from './GeocodeResult'
// import Map from './Map'
// import HotelsTable from './HotelsTable'
import { geocode } from '../domain/Geocoder'
import { searchHotelByLocation } from '../domain/HotelRepository'

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey])

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      place: this.getPlaceParam() || '東京タワー',
      address: '',
      location: {
        lat: 35.6585804,
        lng: 139.7454329,
      },
      hotels: [],
      sortKey: 'price',
    }
  }

  componentDidMount() {
    const place = this.getPlaceParam()
    if (place) {
      this.startSearch(place)
    }
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    })
  }

  getPlaceParam() {
    // props には ReactRouterの機能でlocationの情報が渡されている
    const { place } = queryString.parse(this.props.location.search)
    if (place && place.length > 0) {
      return place
    }
    return null
  }

  handleSortKeyChange(sortKey) {
    this.setState({ sortKey, hotels: sortedHotels(this.state.hotels, sortKey) })
  }

  handlePlaceChange(e) {
    e.preventDefault()
    this.props.onPlaceChange(e.target.value)
  }

  handlePlaceSubmit(e) {
    e.preventDefault()
    this.props.history.push(`/?place=${this.state.place}`)
    this.startSearch()
  }

  startSearch() {
    geocode(this.state.place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location })
            return searchHotelByLocation(location)
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりません')
            break
          }
          default: {
            this.setErrorMessage('エラーが発生しました')
          }
        }
        return []
      })
      .then(hotels => {
        // ↑で返された hotels を受け取ってstateに設定して処理する
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) })
      })
      .catch(error => {
        console.log(`ERROR :: ${error}`)
        this.setErrorMessage('通信に失敗しました')
      })
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm
          place={this.props.place}
          onPlaceChange={e => this.handlePlaceChange(e)}
          onSubmit={e => this.handlePlaceSubmit(e)}
        />

        {/*
        <div classname="result-area">
          <map location={this.state.location} />
          <div classname="result-right">
            <geocoderesult address={this.state.address} location={this.state.location} />
            <h2>ホテル検索結果</h2>
            <hotelstable
              hotels={this.state.hotels}
              sortkey={this.state.sortkey}
              onsort={sortkey => this.handlesortkeychange(sortkey)}
            />
          </div>
        </div>
        */}
      </div>
    )
  }
}

SearchPage.propTypes = {
  place: Proptypes.string.isRequired,
  history: Proptypes.shape({ push: Proptypes.func }).isRequired,
  location: Proptypes.shape({ search: Proptypes.string }).isRequired,
  onPlaceChange: Proptypes.func.isRequired,
}

export default SearchPage
