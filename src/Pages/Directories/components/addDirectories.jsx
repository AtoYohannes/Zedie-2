import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Col,
  Button,
} from "reactstrap";
import firebase from "../../../Config/Firebase";
import routes from "../../../Config/routes";

class AddDirectories extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Directories");
    this.state = {
      companyName: "",
      phoneNumber1: "",
      PhoneNumber2: "",
      contactPerson: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      companyName,
      phoneNumber1,
      phoneNumber2,
      contactPerson,
    } = this.state;
    this.ref
      .add({
        companyName,
        phoneNumber1,
        phoneNumber2,
        contactPerson,
      })
      .then((docRef) => {
        this.setState({
          companyName: "",
          phoneNumber1: "",
          phoneNumber2: "",
          author: "",
          contactPerson: "",
        });
        this.props.history.push(routes.directories);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <div className="directoriesContainer">
        <Card className="mt-5">
          <CardHeader>Add Directory</CardHeader>
          <CardBody>
            <Form onSubmit={this.onSubmit}>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="companyName"
                  placeholder="Company Name"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="phoneNumber1"
                  placeholder="Phone Number 1"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="phoneNumber2"
                  placeholder="Phone Number 2"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="contactPerson"
                  placeholder="Contact Person"
                />
              </Col>
              <Col align="center" className="my-3">
                <Button outline>Add</Button>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddDirectories;
