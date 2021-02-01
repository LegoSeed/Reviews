import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GCard from './card/card';
import SocialFollow from './social';

const Footer = () => (
  <div>
    <div className="support">
      <Container>
        <Row>
          <Col >
            <Row> NEED SUPPORT? CONTACT US </Row>
            <Row>Reach us by email</Row>
            <Row>OR call us at 1-800-BUY-LEGO</Row>
          </Col>
          <Col>
            <Row>OFFICIAL LEGO GUARANTEE</Row>
            <Row>
              <GCard text="Free Shipping for Orders over $35" />
              <GCard text="Earn Points on every purchase and benefit from members only promotion" />
              <GCard text="Missing any pieces or instructions? Let us know and we’ll deliver it to you." />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="contactBox">
      <Container>
        <Col lg={{ offset: 4 }}>
          <SocialFollow />
        </Col>

      </Container>

    </div>
  </div>

);

export default Footer;
