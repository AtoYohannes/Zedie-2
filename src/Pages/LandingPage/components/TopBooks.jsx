import React, { Component } from "react";
import { Card, CardImg, Col, Row, CardImgOverlay, CardText } from "reactstrap";
import firebase from "../../../Config/Firebase";

class TopBooks extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Books");
    this.unsubscribe = null;
    this.state = {
      books: [],
      isMobile: false,
      selectedBook: [],
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const books = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, imageURL, bookURL } = doc.data();
      books.push({
        key: doc.id,
        doc,
        title,
        description,
        author,
        imageURL,
        bookURL,
      });
    });
    this.setState({
      books,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="topBooksContainer">
        <Row>
          {this.state.books.reverse().map((book, index) => (
            <Col md={3} sm={6} xs={12} key={index}>
              <a target="_blank" rel="noopener noreferrer" href={book.bookURL}>
                <Card className="mb-3 zoom books">
                  <CardImg src={book.imageURL} />
                  <CardImgOverlay>
                    {" "}
                    <CardText className="bookOverlay">{book.title}</CardText>
                  </CardImgOverlay>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default TopBooks;
