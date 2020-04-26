import React from "react";
import Card from "react-bootstrap/Card";

import "./FullCapacityCard.css";

const FullCapacityCard = ({item}) => {
  return (
    <Card style={{marginLeft: 15, marginRight: 15, marginBottom: 20, marginTop: 20}}>
      <Card.Body style={{width: 400, padding: 10}}>
        <div style={{color: 'black', marginBottom: 10}}>
          Full Capacity
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
          <div style={{fontSize: 40}}>450</div>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div className="signal-bars mt1 sizing-box bad eight-bars">
              <div className="first-bar bar" />
              <div className="second-bar bar" />
              <div className="third-bar bar" />
              <div className="fourth-bar bar" />
              <div className="fifth-bar bar" />
              <div className="sixth-bar bar" />
              <div className="seventh-bar bar" />
              <div className="eighth-bar bar" />
              <div className="ninth-bar bar" />
              <div className="tenth-bar bar" />
            </div>
            Near Capacity
          </div>
          <div style={{fontSize: 40}}>75%</div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default FullCapacityCard;
