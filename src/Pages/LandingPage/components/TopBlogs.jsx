import React, { Component } from "react";
import {
  Col,
  Card,
  Row,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
} from "reactstrap";
import Avatar from "../../../Components/Avatar";
import { Link } from "react-router-dom";
import firebase from "../../../Config/Firebase";

class TopBlogs extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("News");
    this.unsubscribe = null;
    this.state = {
      news: [],
      isMobile: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      const {
        body,
        header,
        authorName,
        authorPhoneNumber,
        imageURLs,
      } = doc.data();
      news.push({
        key: doc.id,
        doc, // DocumentSnapshot
        body,
        header,
        authorName,
        authorPhoneNumber,
        imageURLs,
      });
    });
    this.setState({
      news,
    });
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    // console.log("All datas "+news);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 800 });
  }

  render() {
    const isMobile = this.state.isMobile;

    return (
      <div className="blogsContainer">
        {isMobile ? (
          <Row>
            {this.state.news.reverse().map((news, index) => (
              <Col key={index} md={10} sm={12} xs={12} className="mb-5">
                <Link
                  to={`/singleNews/${news.key}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="flex-row blogItem border-0 bg-background zoom">
                    <CardImg className="card-img-left " src={news.imageURLs} />
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{news.header}</b>
                      </CardTitle>
                      <CardText className="description">{news.body}</CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{news.authorName}</div>
                            <small>{news.authorPhoneNumber}</small>{" "}
                          </Col>
                          <Avatar className="border" src={news.authorImage} />{" "}
                        </Row>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div>
            {this.state.news.map((news, index) => (
              <Col key={index} md={12} sm={12} xs={12} className="mb-2">
                <Link
                  to={`/singleNews/${news.key}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="blogItemMobile border bg-background">
                    <CardBody>
                      <CardTitle className="bg-background title">
                        <b>{news.header}</b>
                      </CardTitle>
                      <CardText className="description">{news.body}</CardText>
                      <CardFooter className="bg-background">
                        <Row>
                          <Col align="right">
                            <div>{news.authorName}</div>
                            <small>{news.authorPhoneNumber}</small>
                          </Col>
                          <Avatar className="border" src={news.authorImage} />{" "}
                        </Row>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TopBlogs;
