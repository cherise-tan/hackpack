// jshint esversion:6

import React from 'react';
import Calendar from 'react-calendar';

const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
const getLengthInDays = (start, end) => Math.ceil((end.valueOf() - start.valueOf()) / MILLIS_PER_DAY);

const Form = (props) => {

  const setLaundry = (cycleLength) => (event) => {
    event.preventDefault();
    props.setLaundry(cycleLength)
  }

  return (
    <form className="item" onSubmit = {props.submit}>
      <div className="inputblock">
        <label>I am going to: </label>
        <input id="destination" type="text" placeholder="Destination" onChange={(event) => props.setDestination(event.target.value)}/>
      </div>
      <div className="inputblock">
        <label>Number of days away: </label>
        <Calendar
          selectRange={true}
          returnValue="range"
          onChange={([start, end]) => props.setNumDays(getLengthInDays(start, end))} />
      </div>
      <div className="inputblock">
        <label>Travel Style: </label>
        <button onClick={setLaundry(5)}>Pack Light</button>
        <button onClick={setLaundry(10)}>Pack Heavy</button>
      </div>
        {props.error && <ErrorMessage error={props.error} />}
      <div className="inputblock">
        <button  type="submit" value="submit">Submit</button>
      </div>
    </form>
  )
}

const ErrorMessage = (props) => {
  return (
    <div>
    <h3>{props.error}</h3>
    </div>
  )
}

export default Form
