import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

class AdminPannel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="p-5">
        <Card>
          <CardHeader>Admin Pannel</CardHeader>
          <CardBody>
            <Row>
              <Col align="center" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.addMovies }}>
                  <Button outline size="lg">
                    Add Movies
                  </Button>
                </Link>
              </Col>
              <Col align="center" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.addBooks }}>
                  <Button outline size="lg">
                    Add Books
                  </Button>
                </Link>
              </Col>
              <Col align="center" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.addDirectories }}>
                  <Button outline size="lg">
                    Add Directories
                  </Button>
                </Link>
              </Col>
              <Col align="center" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.addNews }}>
                  <Button outline size="lg">
                    Add News
                  </Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminPannel;
