import React from 'react'
import { render } from 'react-dom'
// import PropTypes from 'prop-types'
import Hello from './Hello'
import Timer from './Timer'
import Box from './Box'
import Event from './Event'
import StopWatch from './StopWatch'
import Counter from './Counter'
import NameForm from './NameForm'

const Message = props => <div>{props.children}</div>

const App = () => (
  <div className='container'>
    <Hello name='Hoge' />
    <Message>Hello World</Message>
    <Timer />
    <Box size='small' style={{ backgroundColor: 'lightblue' }}>
      Blue Box
    </Box>
    <Box size='small' style={{ backgroundColor: 'pink' }}>
      Pink Box
    </Box>
    <Event />
    <StopWatch />
    <Counter />
    <NameForm />
  </div>
)

render(<App />, document.getElementById('root'))
