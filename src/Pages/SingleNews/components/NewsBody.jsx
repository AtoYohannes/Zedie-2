import React from "react";
import { Card, Col, CardImg } from "reactstrap";

const NewsBody = ({
  header,
  image,
  body,
  // image1,
  // image3,
  // image5,
  // image6,
  isMobile,
}) => {
  let drawerClasses = "blog-body-container mt-1";
  if (!isMobile) {
    drawerClasses = "blog-body-container-mobile mt-1";
  }

  return (
    <div className={drawerClasses}>
      <Col className="mb-4 mt-4" align="center">
        <h1>
          <b>{header}</b>
        </h1>
      </Col>
      <img src={image} alt="" />
      <div className="body mt-5">
        <p>{body}</p>{" "}
      </div>
      <hr />
      <div className="images mt-5">
        <Col sm={12} md={3} className="mb-3">
          <Card>
            <CardImg src={image} />
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default NewsBody;
