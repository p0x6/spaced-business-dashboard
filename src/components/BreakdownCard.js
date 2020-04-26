import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container"
import "./BreakdownCard.css";
import "../css/badgeBootstrap.min.css"

const OldBreakdownCard = ({item}) => {

  

  return (
    <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
      <Card.Body>
        <div style={{color: 'black'}}>
          {item.name}
        </div>
        <table>
          <tr>
            <th></th>
            <th>Actual #</th>
            <th>Percent</th>
          </tr>
          <tr>
            <td>Capacity</td>
            <td className='value'>{item.currentOccupant}</td>
            <td className='value'>{(item.currentOccupant / item.capacity * 100).toFixed(0)}</td>
          </tr>
          <tr>
            <td>Can Accomondate</td>
            <td className='value'>{item.capacity}</td>
          </tr>
        </table>
        {/*<div style={{flex: 9}}>*/}
        {/*  <div style={{color: 'black', marginBottom: 5}}>*/}
        {/*    {item.name}*/}
        {/*  </div>*/}
        {/*  <div style={{color: 'black'}}>*/}
        {/*    Capacity*/}
        {/*  </div>*/}
        {/*  <div style={{color: 'black'}}>*/}
        {/*    Can Accomodate*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div style={{flex: 1, display: 'flex', paddingTop: 10}}>*/}
        {/*  <div style={{flex: 3}}>*/}
        {/*    <div className="rightHeader">Actual#</div>*/}
        {/*    <div>2</div>*/}
        {/*    <div>3</div>*/}
        {/*  </div>*/}

        {/*  <div style={{flex: 1, alignContent: 'flex-end'}}>*/}
        {/*    <div className="rightHeader">%</div>*/}
        {/*    <div>100</div>*/}
        {/*    <div>50</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Card.Body>
    </Card>
  )
}

const BreakdownCard = ( { item }) => {
  let percent = (item.currentOccupant / item.capacity * 100).toFixed(0);
  console.log(percent)
  let badge;
  
  if (percent > 90) badge = <Badge style={{backgroundColor: "#dc3545"}}>Over</Badge>
  else if (percent > 70) badge = <Badge style={{backgroundColor: "#ffc107"}}>Approaching</Badge>
  else badge = <Badge style={{backgroundColor: "#28a745"}}>Safe</Badge>

  return (
    <Card className="breakdown-card">
      <Card.Body>
      <Container fluid>
        <Row style={{ marginLeft: 5 }}>
        <div style={{color: 'black', fontSize: 18, fontWeight: "bold"}}>
          {item.name} 
        </div>
        {badge}
        <table style={{ width: "97%" }}>
        <tr>
          <th></th>
          <th>Actual #</th>
          <th>Percent</th>
        </tr>
        <tr>
          <td>Capacity</td>
          <td className='value'>{item.currentOccupant}</td>
          <td className='value'>{percent}</td>
        </tr>
        <tr>
          <td>Can Accomondate</td>
          <td className='value'>{item.capacity}</td>
        </tr>
      </table>
          </Row>
      </Container>
      </Card.Body>
    </Card>
  )
}
export default BreakdownCard;
