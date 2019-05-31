// jshint esversion:6

import React, {  useState} from 'react';
import {  render} from 'react-dom';



const App = () => {
<<<<<<< HEAD
  return (
    <div>
    <Temperature/>
    <Pack temp={'hot'}/>
    </div>
  )
=======
  const [temp, setTemp] = useState(null);


  if (!temp) {
    return ( < div > < Temperature setTemp={setTemp} /> </div> )
  }
  return ( < div > < Pack /> </div> )



>>>>>>> a20a80294ae31c3799caad376b5832c33ce6a0af
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
<<<<<<< HEAD
const Pack = ({temp}) => {
if (temp === 'hot') return <PackHot />
if (temp === 'cold') return <PackCold />
return <PackWarm />
}

const PackCold = () => {
  return(
    <ul>
    <li>Jacket</li>
    <li>Pants</li>
    <li>Scarf</li>
    </ul>
  )
}
const PackWarm = () => {
  return(
    <ul>
    <li>Jumper</li>
    <li>Pants</li>
    <li>Hat</li>
    </ul>
  )
}
const PackHot = () => {
  return(
    <ul>
    <li>Singlet</li>
    <li>Shorts</li>
    </ul>
  )
}
render(<App />, document.querySelector('#app'))
=======

const Pack = () => {
  return <h1 > I am pack < /h1>
}

render( < App / > , document.querySelector('#app'))
>>>>>>> a20a80294ae31c3799caad376b5832c33ce6a0af
