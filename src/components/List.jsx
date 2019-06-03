// jshint esversion:6

import React from 'react';

const renderItems = items => items.map(item => (
  <li key={item.item}>
    <span className="item-name">{item.item}</span>
    <span className="item-qty">x{item.needed}</span>
  </li>
))

const List = ({ temp, days, laundry }) => {

  const getNeededItems = (rules) => rules.map(item => {
    return {
      item: item.item,
      needed: item.needed(temp, days)
    };
  }).filter(item => {

    if (item.needed > laundry){
      item.needed = laundry;
    }

    return item.needed > 0;
  });

  const generalItems = getNeededItems(generalRules);
  const clothes = getNeededItems(clothesRules);
  const toiletries = getNeededItems(toiletriesRules);

  return (
    <div className="list">
      <header className="list-header">
        <h3>Packing List</h3>
        <h3 className="temp">{temp} °C</h3>
      </header>
      <h4>General</h4>
      <ul>
        {renderItems(generalItems)}
      </ul>
      <h4>Clothes</h4>
      <ul>
        {renderItems(clothes)}
      </ul>
      <h4>Toiletries</h4>
      <ul>
        {renderItems(toiletries)}
      </ul>
    </div>
  )
};

const generalRules = [
  {
    item: 'Tickets',
    needed:  (temp, days) => 1
  },
  {
    item: 'Passport',
    needed: (temp, days) => 1
  },
  {
    item: 'Travel Adaptor',
    needed: (temp, days) => 1
  },
  {
    item: 'Cellphone + Charger',
    needed: (temp, days) => 1
  },
  {
    item: 'Laptop + Charger',
    needed: (temp, days) => 1
  },
  {
    item: 'Kindle',
    needed: (temp, days) => 1
  },
  {
    item: 'Headphones',
    needed: (temp, days) => 1
  }
]

const clothesRules = [
  {
    item: 'Scarf',
    needed: (temp, days) => temp < 10 ? 1 : 0
  },
  {
    item: 'Beanie',
    needed: (temp, days) => temp < 10 ? 1 : 0
  },
  {
    item: 'Gloves',
    needed: (temp, days) => temp < 10 ? 1 : 0
  },
  {
    item: 'Sunglasses',
    needed: (temp, days) => temp > 20 ? 1 : 0
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
  },
  {
    item: 'Sneakers',
    needed: (temp, days) => 1
  },
  {
    item: 'Sandals',
    needed: (temp, days) => temp > 20 ? 1 : 0
  }
];

const toiletriesRules = [
  {
    item: 'Toothbrush',
    needed: (temp, days) => 1
  },
  {
    item: 'Toothpaste',
    needed: (temp, days) => 1
  },
  {
    item: 'Floss',
    needed: (temp, days) => 1
  },
  {
    item: 'Deoderant',
    needed: (temp, days) => 1
  },
  {
    item: 'Sunblock',
    needed: (temp, days) => temp > 15 ? 1 : 0
  }
]


export default List
