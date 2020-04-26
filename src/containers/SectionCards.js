import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import BreakdownCard from "../components/BreakdownCard";

import "./SectionCards.css";

const data1 = [
  {name: 'Bakery', capacity: 25, currentOccupant: 4},
  {name: 'Dairy', capacity: 25, currentOccupant: 3},
  {name: 'Produce', capacity: 25, currentOccupant: 7},
]

const data2 = [
  {name: 'Frozen', capacity: 25, currentOccupant: 25},
  {name: 'Meat', capacity: 25, currentOccupant: 38},
  {name: 'Deli', capacity: 25, currentOccupant: 5},
];

const data3 = [
  {name: 'Home Items', capacity: 25, currentOccupant: 23},
  {name: 'Frozen Foods', capacity: 25, currentOccupant: 1},
  {name: 'Personal Items', capacity: 25, currentOccupant: 6},
];

const SectionCards = () => {
  return (
    <div style={{flex: 7}}>
      <CardDeck>
        {data1.map(item => (
          <BreakdownCard item={item} />
        ))}
      </CardDeck>
      <CardDeck>
        {data2.map(item => (
          <BreakdownCard item={item} />
        ))}
      </CardDeck>
      <CardDeck>
        {data3.map(item => (
          <BreakdownCard item={item} />
        ))}
      </CardDeck>
      </div>
  )
}

export default SectionCards;
