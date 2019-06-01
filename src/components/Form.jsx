// jshint esversion:6

import React from 'react';
import Calendar from 'react-calendar';
import LoadingButton from './LoadingButton';

const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
const getLengthInDays = (start, end) => Math.ceil((end.valueOf() - start.valueOf()) / MILLIS_PER_DAY);

const Form = (props) => {

  const setLaundry = (cycleLength) => (event) => {
    event.preventDefault();
    props.setLaundry(cycleLength);

  }

  const packLight = props.laundry === 5 ? 'laundry-selected': 'laundry-not-selected';
  const packHeavy = props.laundry === 10 ? 'laundry-selected': 'laundry-not-selected';

  return (
    <form className="item" onSubmit = {props.submit}>
      <div className="inputblock dest-inputblock">
        <label className="dest-label">I am going to </label>
        <input id="destination" type="text" placeholder="destination" onChange={(event) => props.setDestination(event.target.value)}/>
        <label className="dest-label"> on these dates</label>
      </div>
      <div className="inputblock">
        <Calendar
          selectRange={true}
          returnValue="range"
          onChange={([start, end]) => props.setNumDays(getLengthInDays(start, end))} />
      </div>
      <div className="inputblock">
        <label>Travel Style: </label>

        <button className={packLight} onClick={setLaundry(5)}>Pack Light</button>
        <button className={packHeavy} onClick={setLaundry(10)}>Pack Heavy</button>
      </div>

      {props.error && <ErrorMessage error={props.error} />}

      <div className="inputblock">
        <LoadingButton isLoading={props.isLoading} className="submit">Submit</LoadingButton>
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
