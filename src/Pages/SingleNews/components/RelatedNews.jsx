import React, { Component } from "react";
import { Card, CardBody, CardImg, Row, Col } from "reactstrap";
import firebase from "../../../Config/Firebase";
import { Link } from "react-router-dom";

class RelatedNews extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("News");
    this.unsubscribe = null;
    this.state = {
      news: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      const { body, header, author, imageURLs } = doc.data();
      news.push({
        key: doc.id,
        doc, // DocumentSnapshot
        body,
        header,
        author,
        imageURLs,
      });
    });
    this.setState({
      news,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    // console.log("All datas "+news);
  }
  render() {
    return (
      <div className="relatedBlogs flex-column mt-5">
        <Row>
          {this.state.news.map((news, index) => (
            <Col key={index} sm={12} xs={12} md={4} className="mt-2 mb-2 zoom">
              <Link to={`/singleNews/${news.key}`}>
                <Card>
                  <CardImg src={news.imageURLs} />
                  <CardBody align="center" className="bg-background">
                    {news.header}
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default RelatedNews;
