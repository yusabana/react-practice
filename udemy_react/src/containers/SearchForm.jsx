import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// state をもらって props を返す純粋関数
const mapStateToProps = state => ({
  place: state.place,
})

// dispatch をもらって props を返す純粋関数
const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
})

const SearchForm = ({ place, onPlaceChange, onSubmit }) => (
  <form className="search-form" onSubmit={e => onSubmit(e)}>
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

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm)
export default ConnectedSearchForm
