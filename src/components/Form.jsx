import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit = {props.submit}>
      <div className="inputblock">
        <label>I am going to: </label>
        <input id="destination" type="text" placeholder="Destination" onChange={(event) => props.setDestination(event.target.value)}/>
      </div>
      <div className="inputblock">
        <label>Date of travel: </label>
        <input id="date" type="date" placeholder="Date"/>
      </div>
      <div className="inputblock">
        <label>Travel Style: </label>
        <button>Pack Light</button>
        <button>Pack Heavy</button>
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
