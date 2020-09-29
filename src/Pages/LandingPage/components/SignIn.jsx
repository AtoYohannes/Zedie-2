import React from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Translate from "react-translate-component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignInLanding = () => {
  const notify = () => toast.success("Succesfully Subscribed.");

  return (
    <div className="landingSignInContainer">
      <Row>
        <Col md={6} sm={12} xs={12}>
          {/* <SignIn /> */}
          <FormGroup>
            <Label>*Enter Your Phone Number</Label>
            <Input type='number' placeholder="0900000000" />
          </FormGroup>
          <Button onClick={notify} outline color="secondary">
            Subscribe
          </Button>
        </Col>
        <Col md={6} sm={12} xs={12} className="mt-5 text-dark">
          <h4>
            <Translate content="in" />
          </h4>
        </Col>
      </Row>
    </div>
  );
};
export default SignInLanding;
