// jshint esversion:6

import React from 'react';

const List = ({ temp, days, laundry }) => {
  const items = rules.map(item => {
    return {
      item: item.item,
      needed: item.needed(temp, days)
    }
  }).filter(item => {

    if (item.needed > laundry){
      item.needed = laundry;
    }


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
    item: 'Scarf',
    needed: (temp, days) => temp < 10 ? 1 : 0
  },
  {
    item: 'Beanie',
    needed: (temp, days) => temp < 10 ? 1 : 0
  },
  {
    item: 'Jacket',
    needed: (temp, days) => temp < 15 ? 1 : 0
  },
  {
    item: 'Jumper',
    needed: (temp, days) => temp < 20 ? 1 : 0
  },
  {
    item: 'Long sleeved shirt',
    needed: (temp, days) => temp < 15 ? (Math.ceil(days / 3)) : 0
  },
  {
    item: 'T-shirt',
    needed: (temp, days) => temp > 15 ? (Math.ceil(days / 2)) : 0
  },
  {
    item: 'Singlet',
    needed: (temp, days) => temp > 25 ? (Math.ceil(days / 2)) : 0
  },
  {
    item: 'Shorts',
    needed: (temp, days) => temp > 20 ? (Math.ceil(days / 3)) : 0
  },
  {
    item: 'Pants',
    needed: (temp, days) => Math.ceil(days / 3)
  },
  {
    item: 'Underwear',
    needed: (temp, days) => days + 2
  },
  {
    item: 'Socks',
    needed: (temp, days) => days + 2
  }
];



export default List
