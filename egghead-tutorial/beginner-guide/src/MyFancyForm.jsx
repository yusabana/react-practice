import React from 'react'

class MyFancyForm extends React.Component {
  static availableOptions = [
    'apple',
    'grape',
    'cherry',
    'orange',
    'pear',
    'peach',
  ]

  state = {multiline: '', commaSeparated: '', multiSelect: []}

  handleCommaSeparatedChange = event => {
    console.log('handleCommaSeparetedChanged')
    const {value} = event.target
    const allVals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean) // カンマ2連続とか空の物が来た場合に除外するため
    this.setState({
      commaSeparated: value,
      multiline: allVals.join('\n'),
      multiSelect: allVals.filter(v => MyFancyForm.availableOptions.includes(v)),
    })
  }

  handleMultilineChange = event => {
    console.log('handleMultilineChange')
    const {value} = event.target
    const allVals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean) // カンマ2連続とか空の物が来た場合に除外するため
    this.setState({
      commaSeparated: allVals.join(','),
      multiline: value,
      multiSelect: allVals.filter(v => MyFancyForm.availableOptions.includes(v)),
    })
  }

  handleMultiSelectChange = event => {
    console.log('handleMultiSelectChange')
    console.log(event.target.selectedOptions)
    const allVals = Array.from( // Array化する
      event.target.selectedOptions
    ).map(o => o.value)
    this.setState({
      commaSeparated: allVals.join(','),
      multiline: allVals.join('\n'),
      multiSelect: allVals,
    })
  }

  render() {
    const {commaSeparated, multiline, multiSelect} = this.state
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br/>
            <input
              type="text"
              value={commaSeparated}
              style={{width: '100%'}}
              onChange={this.handleCommaSeparatedChange}
            />
          </label>
        </div>
        <div>
          <label>
            multiline values:
            <br/>
            <textarea
              value={multiline}
              rows={MyFancyForm.availableOptions.length}
              onChange={this.handleMultilineChange}
            />
          </label>
        </div>
        <div>
          <label>
            multiselect values:
            <br/>
            <select
              multiple
              value={multiSelect}
              size={MyFancyForm.availableOptions.length}
              onChange={this.handleMultiSelectChange}
            >
              {MyFancyForm.availableOptions.map(
                optionValue => (
                  <option
                    key={optionValue}
                    value={optionValue}>{optionValue}</option>
                )
              )}
            </select>
          </label>
        </div>
      </form>
    )
  }
}

export default MyFancyForm