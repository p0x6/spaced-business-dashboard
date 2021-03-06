import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import BreakdownCard from "../components/BreakdownCard";

import "./SectionCards.css";
import FullCapacityCard from "../components/FullCapacityCard";

const data1 = [
  {name: 'Bakery', capacity: 25, currentOccupant: 4},
  {name: 'Dairy', capacity: 25, currentOccupant: 3},
  {name: 'Produce', capacity: 25, currentOccupant: 21},
];

const data2 = [
  {name: 'Frozen', capacity: 25, currentOccupant: 25},
  {name: 'Meat', capacity: 25, currentOccupant: 38},
  {name: 'Deli', capacity: 25, currentOccupant: 5},
];

const data3 = [
  {name: 'Home Items', capacity: 25, currentOccupant: 23},
  {name: 'Frozen Foods', capacity: 25, currentOccupant: 1},
  {name: 'Personal Items', capacity: 25, currentOccupant: 18},
];

const SectionCards = () => {
  return (
    <div style={{flex: 7, backgroundColor: '#f9f9f9'}}>
    <Container fluid>
      <FullCapacityCard />
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
    </Container>

    </div>
  )
}

export default SectionCards;
