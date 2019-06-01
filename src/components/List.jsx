// jshint esversion:6

import React from 'react';

const List = ({ temp, days }) => {
  const items = rules.map(item => {
    return {
      item: item.item,
      needed: item.needed(temp, days)
    }
  }).filter(item => {
    return item.needed > 0
  });

  return (
    <ul>
      {items.map(item => <li>{item.item} x {item.needed}</li>)}
    </ul>
  )

};



const rules = [
  {
    item: 'Jacket',
    needed: (temp, days) => temp < 20 ? 1 : 0
  },

  {
    item: 'Pants',
    needed: (temp, days) => Math.ceil(days / 3)
  }
];





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
