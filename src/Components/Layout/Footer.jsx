import React from "react";
import { Nav, Card, Row, Col, CardImg } from "reactstrap";
import Logo from "../../Assets/ZEDIE.svg";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
import Translate from 'react-translate-component';

const Footer = () => {
  return (
    <Card className="border-0 footer">
      <div className="footerContainer">
        <Row>
          <Col md={3} sm={12} xs={12}>
            <CardImg src={Logo} />
            <h7>
            <Translate content="copy.p1" />
            </h7>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary">  <Translate content="Categories" /></Nav>
            <Link to={{ pathname: routes.news }}>
              <Nav className="footerTexts"> <Translate content="news" /></Nav>
            </Link>
            <Link to={{ pathname: routes.cinemaSchedules }}>
              <Nav className="footerTexts"><Translate content="CinemaS" /></Nav>
            </Link>
            <Link to={{ pathname: routes.books }}>
              <Nav className="footerTexts">  <Translate content="books" /></Nav>
            </Link>
            <Link to={{ pathname: routes.directories }}>
              <Nav className="footerTexts"><Translate content="directories" /></Nav>
            </Link>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts" />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Nav className="footerTexts mb-4 text-primary"><Translate content="Info" /></Nav>
            <Link to={{ pathname: routes.contactUs }}>
              <Nav className="footerTexts"><Translate content="ContactUs" /></Nav>
            </Link>
            <Link to={{ pathname: routes.aboutUs }}>
              <Nav className="footerTexts"><Translate content="AboutUs" /></Nav>
            </Link>
            <Link to={{ pathname: routes.termsAndConditions }}>
              <Nav className="footerTexts"><Translate content="Term" /></Nav>
            </Link>
            <Link to={{ pathname: routes.privacyPolicy }}>
              <Nav className="footerTexts"><Translate content="Privacy" /></Nav>
            </Link>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Footer;
