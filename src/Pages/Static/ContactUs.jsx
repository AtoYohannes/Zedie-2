import React from "react";
import { entertaiment18 } from "../../Assets/images";
import {
  CardImg,
  Col,
  Card,
  CardImgOverlay,
  Row,
  Input,
  Button,
} from "reactstrap";
import { MdLocalAirport, MdMail } from "react-icons/md";
import Translate from 'react-translate-component';

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <Col md={12} sm={12} xs={12}>
        <Card className="border-0 bg-background">
          <CardImg src={entertaiment18} />
          <CardImgOverlay className="overlay">
            <h1><Translate content="ContactUs" /></h1>
          </CardImgOverlay>
        </Card>
      </Col>
      <Col md={12} sm={12} xs={12} className="threads">
        <Card className="bg-background">
          <Row>
            <Col
              align="center"
              md={6}
              sm={12}
              xs={12}
              className="p-5 formContainer"
            >
              <h3><Translate content="SendUs" /></h3>
              
              <Input
                className="bg-background p-4 mb-4"
                placeholder="Your Email Address"
                type="email"
              />
              <Input
                className="bg-background p-4 mt-1 mb-3"
                placeholder="Your Email Address"
                type="textarea"
              />

              <Button size="sm" block outline>
                
                <Translate content="Submit" />
              </Button>
            </Col>
            <Col md={6} sm={12} xs={12} className="p-5">
              <h3>
                <MdLocalAirport /> 
                
                <Translate content="Address" />
              </h3>
              <p className="ml-4 mb-5">
                Merkato, Addis Ababa, Ethiopia or call us on (+011) 96 716 6879
              </p>
              <h3>
           
                <Translate content="Let" />
              </h3>
              <p className="ml-4 mb-5">+1 800 1236879</p>
              <h3>
                <MdMail /> <Translate content="Sale" />{" "}
              </h3>
              <p className="ml-4 mb-5">contact@example.com</p>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default ContactUs;
