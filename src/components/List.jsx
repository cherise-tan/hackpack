import React from 'react'

const List = ({ temp }) => {
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

export default List
