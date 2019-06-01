// jshint esversion:6

import React, {  useState} from 'react'
import { render } from 'react-dom'

const App = () => {
  const [temp, setTemp] = useState(null);
  const [destination, setDestination] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(destination);
  }

  if (!temp) {
    return <Form setTemp={setTemp} submit={submit} setDestination={setDestination}/>

  }

  return <Pack temp={temp} />
}

const Form = (props) => {
  return (
    <form onSubmit = {props.submit}>

    <div>
      <label>I am going to: </label>
      <input id="destination" type="text" placeholder="Destination" onChange={(event) => props.setDestination(event.target.value)}/>
    </div>
    <div>
      <label>Date of travel: </label>
      <input id="date" type="date" placeholder="Date"/>
    </div>
    <div>
      <label>Travel Style: </label>
      <button>Pack Light</button>
      <button>Pack Heavy</button>
    </div>
    <div>
      <button  type="submit" value="submit">Submit</button>
    </div>

    <div>
      <button onClick = { () => props.setTemp("hot") } >Hot</button>
      <button onClick = { () => props.setTemp("mild") } >Mild</button>
      <button onClick = { () => props.setTemp("cold") } >Cold</button>

    </div>
    </form >
  )
}

const Pack = ({temp}) => {
  if (temp === 'hot') return <PackHot />
  if (temp === 'cold') return <PackCold />
  return <PackMild />
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

const PackMild = () => {
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
