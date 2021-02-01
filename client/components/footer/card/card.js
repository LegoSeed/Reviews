import React from 'react';
import { Card } from 'react-bootstrap';

const GCard = (props) => (
  <Card className="guarantee">
    {/* <Card.Img variant="top" src="batman.png" /> */}
    <Card.Body>
      <Card.Text>
        {props.text}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default GCard;
