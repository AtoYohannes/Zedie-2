import React, { Component } from "react";
import { Col, CardImg, CardImgOverlay, Card, Row } from "reactstrap";
import { entertaiment21 } from "../../Assets/images";
import Translate from 'react-translate-component';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="aboutUsContainer">
        <Col md={12} sm={12} xs={12}>
          <Card className="border-0 bg-background">
            <CardImg src={entertaiment21} />
            <CardImgOverlay className="overlay">
              <h1><Translate content="AboutUs" /></h1>
              
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12} className="threads">
          <Row className="zoom">
            <Col md={8} sm={12} xs={12}>
              <h3><Translate content="OurStory" /></h3>
              
              <p>
              <Translate content="copy.os" />
              </p>
              <p>
              <Translate content="copy.os2" />
              </p>
            </Col>
            <Col sm={2} md={1} xs={2} />
            <Col align="center" md={3} sm={12} xs={12}>
              <CardImg src={entertaiment21} />
            </Col>
          </Row>
          <Row className="zoom">
            <Col align="center" md={3} sm={12} xs={12}>
              <CardImg src={entertaiment21} />
            </Col>
            <Col sm={2} md={1} xs={2} />
            <Col md={8} sm={12} xs={12}>
             
              <h3><Translate content="OurMission" /></h3>
              <p>
              <Translate content="copy.om" />
              </p>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default AboutUs;
