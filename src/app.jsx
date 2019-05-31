import React, {  useState} from 'react'
import { render } from 'react-dom'

const App = () => {
  const [temp, setTemp] = useState(null);

  if (!temp) {
    return <Temperature setTemp={setTemp} />
  }

  return <Pack temp={temp} />
}

const Temperature = (props) => {
  return (
    <div>
      <button onClick = { () => props.setTemp("hot") } >Hot</button>
      <button onClick = { () => props.setTemp("moderate") } >Moderate</button>
      <button onClick = { () => props.setTemp("cold") } >Cold</button>
    </div>
  )
}

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
