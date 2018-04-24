import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPlace, startSearch } from '../actions'

const SearchForm = props => (
  <form
    className="search-form"
    onSubmit={e => {
      e.preventDefault()
      props.history.push(`/?place=${props.place}`)
      props.startSearch()
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={e => {
        e.preventDefault()
        props.setPlace(e.target.value)
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
)

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
}

// ここで connect の第2引数に setPlace と startSearch を設定することで SearchForm コンポーネントから
// props.setPlace(e.target.value) などのように呼び出すことができる
export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch }
)(SearchForm)
