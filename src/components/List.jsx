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
    <div className="list">
      <header>
        <h3>Packing List</h3>
      </header>
      <ul>
        {items.map(item => (
          <li key={item.item}>
            <span className="item-name">{item.item}</span>
            <span className="item-qty">x{item.needed}</span>
          </li>
        ))}
      </ul>
    </div>
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
    needed: (temp, days) => days
  },
  {
    item: 'Socks',
    needed: (temp, days) => days + 2
  }
];



export default List
