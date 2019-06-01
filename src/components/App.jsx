import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const App = () => {
  const [destination, setDestination] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    fetch(`https://api.apixu.com/v1/forecast.json?key=d2c6a897b72845b08cb02436190106&q=${encodeURIComponent(destination)}`)
      .then(res => res.json())
      .then(weather => weather.forecast.forecastday.map(day => ({
        date: day.date,
        temp: day.day.avgtemp_c,
      })))
      .then(newForecast => setForecast(newForecast))
      .catch(err => {
        setError("Destination not found");
      })
  }

  if (!forecast.length) {
    return (
      <Form submit={submit} setDestination={setDestination} error={error} />
    )
  }

  return <Pack temp={forecast[0].temp} />
}

export default App
