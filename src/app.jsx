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
  return <h1>I am temperature</h1>
}

const Pack = () => {
  return <h1>I am pack</h1>
}

render(<App />, document.querySelector('#app'))
