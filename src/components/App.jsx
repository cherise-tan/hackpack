<<<<<<< HEAD
import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import Header from './Header'
=======
// jshint esversion:6

import React, { useState } from 'react';
import Form from './Form';
import List from './List';

>>>>>>> 9312ce04e420e4c904747ef2f3a5f00922805c67
const App = () => {
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(1);
  const [forecast, setForecast] = useState([]);
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

  let page= null


  if (!forecast.length) {
<<<<<<< HEAD
    page =<Form submit={submit} setDestination={setDestination} error={error} />
  } else {
    page = <Pack temp={forecast[0].temp} />
  }

  return (
    <div className="parent">
      <Header />
      <div className="row content">{page}</div>
    </div>
  )
}
=======
    return (
      <Form submit={submit} setDestination={setDestination} numDays={numDays} setNumDays={setNumDays} error={error} setLaundry={setLaundry}/>
    )
  }

  return <List temp={forecast[0].temp} days={numDays} laundry={laundry}/>
}



>>>>>>> 9312ce04e420e4c904747ef2f3a5f00922805c67
export default App
