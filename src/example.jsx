import React, { useState } from 'react'
import { render } from 'react-dom'

// const App = React.createElement('h1', {}, ['Hello world!'])
const App = () => {
  return (
    <div>
      <Header title={'Hello world'} />
      <Counter />
    </div>
  )
}

const Header = ({ title }) => {
  return <h1>{title}</h1>
}

const Counter = () => {
  const [count, setCount] = useState(0) // [ value, functionToSet ]

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

render(<App />, document.querySelector('#app'))
