import React, { Component } from 'react'

import { geocode } from '../domain/Geocoder'
import SearchForm from './SearchForm'
import GeocodeResult from './GeocodeResult'
import Map from './Map'
import HotelsTable from './HotelsTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        lat: 35.6585804,
        lng: 139.7454329,
      },
      hotels: [
        { id: 110, name: 'ホテルオークラ', url: 'http://yahoo.co.jp' },
        { id: 210, name: 'アパホテル', url: 'https://google.com' },
      ],
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

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location })
            break
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりません')
            break
          }
          default: {
            this.setErrorMessage('エラーが発生しました')
          }
        }
      })
      .catch(error => {
        console.log(`ERROR :: ${error}`)
        this.setErrorMessage('通信に失敗しました')
      })
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult address={this.state.address} location={this.state.location} />
            <h2>ホテル検索結果</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
