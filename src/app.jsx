// jshint esversion:6

import React, { useState } from 'react';
import { render } from 'react-dom';



const App = () => {
  return (
    <div>
    <Temperature/>
    <Pack/>
    </div>
  )
}

const Temperature = () => {
  const [temp, setTemp] = useState(0);  console.log(temp);
  return (
    <div>
      <button onClick={() => setTemp("hot")}>Hot</button>
      <button onClick={() => setTemp("moderate")}>Moderate</button>
      <button onClick={() => setTemp("cold")}>Cold</button>
    </div>
  )
}

const Pack = () => {
  return <h1>I am pack</h1>
}

render(<App />, document.querySelector('#app'))
