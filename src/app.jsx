// jshint esversion:6

import React, {  useState} from 'react'
import { render } from 'react-dom'

const App = () => {
  const [destination, setDestination] = useState("");
  const [forecast, setForecast] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    fetch(`https://api.apixu.com/v1/forecast.json?key=d2c6a897b72845b08cb02436190106&q=${encodeURIComponent(destination)}`)
      .then(res => res.json())
      .then(weather => weather.forecast.forecastday.map(day => ({
        date: day.date,
        temp: day.day.avgtemp_c,
      })))
      .then(newForecast => setForecast(newForecast))
  }

  if (!forecast.length) {
    return <Form submit={submit} setDestination={setDestination}/>
  }

  return <Pack temp={forecast[0].temp} />
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
    </form>
  )
}

const Pack = ({ temp }) => {
  if (temp > 24) return <PackHot />
  if (temp < 15) return <PackCold />
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
