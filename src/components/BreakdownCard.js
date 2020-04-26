import React from "react";
import Card from "react-bootstrap/Card";

import "./BreakdownCard.css";

const BreakdownCard = ({item}) => {
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

export default BreakdownCard;
