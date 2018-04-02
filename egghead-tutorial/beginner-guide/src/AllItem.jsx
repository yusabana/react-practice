import React from 'react'

class AllItem extends React.Component {
  static allItems = [
    {id: 'a', value: 'apple'},
    {id: 'o', value: 'orange'},
    {id: 'g', value: 'grape'},
    {id: 'p', value: 'pear'},
  ]

  state = {items: []}

  render() {
    const {items} = this.state

    return (
      <div>
        <button
          disabled={items.length >= AllItem.allItems.length}
          onClick={this.addItem}
        >
          +
        </button>
        {AllItem.allItems.map(item => (
          <button disabled>
          </button>
        ))}
      </div>
    )
  }
}

export default AllItem