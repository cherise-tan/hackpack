// jshint esversion:6

import React, { useState, Fragment } from 'react'
import Form from './Form'
import List from './List'
import Header from './Header'

const App = () => {
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(1);
  const [forecast, setForecast] = useState([{ date: '2019-06-01', temp: 19 }]);
  const [error, setError] = useState(null);
  const [laundry, setLaundry] = useState(7);

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

  let list = forecast.length
    ? <List temp={forecast[0].temp} days={numDays} />
    : null

  return (
    <Fragment>
      <Header />
      <div className="row content">
        <Form
          submit={submit}
          setDestination={setDestination}
          numDays={numDays}
          setNumDays={setNumDays}
          laundry={laundry}
          setLaundry={setLaundry}
          error={error} />
        {list}
      </div>
    </Fragment>
  )
}

export default App
