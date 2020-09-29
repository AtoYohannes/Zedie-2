import React, { Component } from "react";
import { Card, Col, Row, CardHeader, CardBody } from "reactstrap";
import firebase from "../../Config/Firebase";

class Directories extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Directories");
    this.unsubscribe = null;
    this.state = {
      directories: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const directories = [];
    querySnapshot.forEach((doc) => {
      const {
        companyName,
        phoneNumber1,
        phoneNumber2,
        contactPerson,
      } = doc.data();
      directories.push({
        key: doc.id,
        doc, // DocumentSnapshot
        companyName,
        phoneNumber1,
        contactPerson,
        phoneNumber2,
      });
    });
    this.setState({
      directories,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    // console.log("All datas "+news);
  }
  render() {
    return (
      <div className="p-5">
        <h1 className=" mb-3 text-primary">ስልክ ቁጥር ማዉጫ</h1>
        <hr />
        <Row>
          {this.state.directories.map((directory, index) => (
            <Col md={4} sm={12} xs={12} key={index} className="mb-3">
              <Card className='zoom'>
                <CardHeader>{directory.companyName}</CardHeader>
                <CardBody>
                  <Col>{directory.phoneNumber1}</Col>
                  <Col>{directory.phoneNumber2}</Col>
                  <Col>{directory.contactPerson}</Col>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Directories;
