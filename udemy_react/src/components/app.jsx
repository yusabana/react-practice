import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from './SearchForm.jsx'
import GeocodeResult from './GeocodeResult'
import Map from './Map'

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    })
  }

  handlePlaceSubmit(place) {
    console.log(place)
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then(results => {
        console.log(results)
        const data = results.data
        const result = data.results[0]

        switch (data.status) {
          case 'OK': {
            const { lat, lng } = result.geometry.location
            this.setState({
              address: result.formatted_address,
              lat,
              lng,
            })
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
        console.log(`ERROR DE:: ${error}`)
        this.setErrorMessage('通信に失敗しました')
      })
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult address={this.state.address} lng={this.state.lng} lat={this.state.lat} />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    )
  }
}

export default App
