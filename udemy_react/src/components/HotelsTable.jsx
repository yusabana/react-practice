import React from 'react'
import PropTypes from 'prop-types'
import HotelRow from './HotelRow'

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th className="hotel-price-column">価格</th>
        <th>レビュー</th>
        <th>レビューカウント</th>
      </tr>
      {hotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)}
    </tbody>
  </table>
)

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
}

HotelsTable.defaultProps = {
  hotels: [],
}

export default HotelsTable
