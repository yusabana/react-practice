import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { geocode } from '../domain/Geocoder'
// import { searchHotelByLocation } from '../domain/HotelRepository'

const SearchForm = ({ place, onPlaceChange, onSubmit }) => (
  <form
    className="search-form"
    onSubmit={e => {
      e.preventDefault()
      onSubmit(place)
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={place}
      onChange={e => {
        e.preventDefault()
        onPlaceChange(e.target.value)
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
)

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

// state をもらって props を返す純粋関数
const mapStateToProps = state => ({
  place: state.place,
})

// dispatch をもらって props を返す純粋関数
const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
  onSubmit: place => {
    geocode(place).then(({ status, address, location }) => {
      switch (status) {
        case 'OK': {
          dispatch({ type: 'GEOCODE_FETCHED', address, location })
          // return searchHotelByLocation(location)
          break
        }
        case 'ZERO_RESULTS': {
          // this.setErrorMessage('結果が見つかりません')
          break
        }
        default: {
          // this.setErrorMessage('エラーが発生しました')
        }
      }
      return []
    })
    // .then(hotels => {
    //   // ↑で返された hotels を受け取ってstateに設定して処理する
    //   this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) })
    // })
    // .catch(error => {
    //   console.log(`ERROR :: ${error}`)
    //   this.setErrorMessage('通信に失敗しました')
    // })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
