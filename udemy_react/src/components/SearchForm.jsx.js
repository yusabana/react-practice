import React, { Component, PropTypes } from 'react'
import GeocodeResult from './GeocodeResult'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = { place: '東京タワー' }
  }

  handlePlaceChange(place) {
    this.setState({ place })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.place)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        <GeocodeResult address={this.state.address} lat={this.state.lat} lng={this.state.lng} />
        <input type="submit" value="検索" />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm
