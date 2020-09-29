import React from "react";
import { MdLockOpen } from "react-icons/md";
import { Card, Col, CardHeader, CardBody, Input, Button } from "reactstrap";
import Translate from 'react-translate-component';

const SignIn = () => {
  return (
    <Card className="signIn border-0">
      <CardHeader align="center" className="bg-background mb-3">
        <h4><Translate content="signup2" /> ዘዴ</h4>
      </CardHeader>
      <Col align="center">
        <MdLockOpen size={40} />
      </Col>
      <CardBody>
        <Input placeholder="Your Number" type="number" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />

        <Col align="center" className="mt-3">
          <Button outline size="sm">
          
            <Translate content="signup" />
          </Button>
        </Col>
      </CardBody>
    </Card>
  );
};

export default SignIn;
