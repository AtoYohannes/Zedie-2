import React, { Component } from "react";
import { PDFReader } from "reactjs-pdf-reader";
import firebase from "../../Config/Firebase";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      book: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("Books")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          book: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    console.log(this.state.book.bookURL);

    return (
      <div style={{ overflow: "scroll" }}>
        <PDFReader
          scale={2}
          showAllPage
          url={this.state.book.bookURL}
          // data={this.state.book.bookURL}
        />
      </div>
    );
  }
}

export default SingleBook;
