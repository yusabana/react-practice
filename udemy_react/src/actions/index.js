import { geocode } from '../domain/Geocoder'

// place をもらって dispatch を引数にした関数を返している
export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place })

// getState は store のメソッド
export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place).then(({ status, address, location }) => {
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
}
