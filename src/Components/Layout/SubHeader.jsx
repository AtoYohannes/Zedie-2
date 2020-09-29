import React, { Component } from "react";
import { Card, Button, Row, Col } from "reactstrap";
import { MdPhone, MdList, MdBook, MdTv } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };
  render() {
    const isMobile = this.state.isMobile;

    return (
      <Card align="center" className="bg-primary">
        {isMobile ? (
          <div className="subHeaderContainer">
            <Row>
              <Col className="mb-1" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.news }}>
                  <Button outline size="lg" color="light">
                    <MdList /> News
                  </Button>
                </Link>
              </Col>
              <Col className="mb-1" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.books }}>
                  <Button outline size="lg" color="light">
                    <MdBook /> Books
                  </Button>
                </Link>
              </Col>
              <Col className="mb-1" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.directories }}>
                  <Button outline size="lg" color="light">
                    <MdPhone /> Directories
                  </Button>
                </Link>
              </Col>
              <Col className="mb-1" md={3} sm={12} xs={12}>
                <Link to={{ pathname: routes.cinemaSchedules }}>
                  <Button outline size="lg" color="light">
                    <MdTv /> Cinema
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Col className="mb-1" md={3} sm={6} xs={6}>
              <Link to={{ pathname: routes.news }}>
                <Button block outline size="sm" color="light">
                  <MdList /> News
                </Button>
              </Link>
            </Col>
            <Col className="mb-1" md={3} sm={6} xs={6}>
              <Link to={{ pathname: routes.books }}>
                <Button block outline size="sm" color="light">
                  <MdBook /> Books
                </Button>
              </Link>
            </Col>
            <Col className="mb-1" md={3} sm={6} xs={6}>
              <Link to={{ pathname: routes.directories }}>
                <Button block outline size="sm" color="light">
                  <MdPhone /> Directories
                </Button>
              </Link>
            </Col>
            <Col className="mb-1" md={3} sm={6} xs={6}>
              <Link to={{ pathname: routes.cinemaSchedules }}>
                <Button block outline size="sm" color="light">
                  <MdTv /> Cinema
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </Card>
    );
  }
}

export default SubHeader;
