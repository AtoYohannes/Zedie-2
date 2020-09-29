import React from "react";
import Avatar from "../../../Components/Avatar";
import { Row, Col } from "reactstrap";
import { MdStar } from "react-icons/md";

const NewsHeader = ({ isMobile, authorName, authorPhoneNumber }) => {
  return (
    <>
      {!isMobile ? (
        <div className="singleBlogHeaderContainer-Mobile">
          <div className="authorInformation">
            <Row>
              <Col className="mt-1">
                <h6>{authorName}</h6>
                <small className="mr-2">
                  Jul 12 <MdStar className="ml-1 text-info mb-2" /> ||
                </small>
                <small>{authorPhoneNumber}</small>
              </Col>
              <div>
                <Avatar size={35} className="border mr-2 mt-2" />
              </div>
            </Row>
          </div>
        </div>
      ) : (
        <div className="singleBlogHeaderContainer">
          <div className="authorInformation">
            <Row>
              <div>
                <Avatar size={60} className="border" />
              </div>
              <Col className="mt-1">
                <h5>Yohannes Berhanu</h5>
                Jul 12 <MdStar className="ml-1 text-info mb-2" />
              </Col>
              <Col align="right" className="mt-4">
                {authorPhoneNumber}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsHeader;
