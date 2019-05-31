// jshint esversion:6

import React, {  useState} from 'react';
import {  render} from 'react-dom';



const App = () => {
  const [temp, setTemp] = useState(null);


  if (!temp) {
    return ( < div > < Temperature setTemp={setTemp} /> </div> )
  }
  return ( < div > < Pack /> </div> )



}

const Temperature = (props) => {


  return (
    <    div >
    < button onClick = { () => props.setTemp("hot") } > Hot < /button>
    <button onClick = { () => props.setTemp("moderate") } > Moderate < /button>
    <  button onClick = { () => props.setTemp("cold") } > Cold < /button>
    <    /div>
  )
}

const Pack = () => {
  return <h1 > I am pack < /h1>
}

render( < App / > , document.querySelector('#app'))
