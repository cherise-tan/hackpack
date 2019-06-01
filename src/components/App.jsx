// jshint esversion:6

import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(1);
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
      });
  };

  if (!forecast.length) {
    return (
      <Form submit={submit} setDestination={setDestination} numDays={numDays} setNumDays={setNumDays} error={error} />
    )
  }

  return <List temp={forecast[0].temp} days={numDays} />
}

const rules = [
  {
    item: 'Jacket',
    needed: (temp, days) => temp < 20 ? 1 : 0
  }
]

export default App
