import React, { Component } from "react";
import firebase from "../../../Config/Firebase";
import FileUploader from "react-firebase-file-uploader";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Form,
  Progress,
  CardImg,
} from "reactstrap";
import routes from "../../../Config/routes";

class PostNews extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Books");
    this.state = {
      title: "",
      description: "",
      bookURL: "",
      isUploading: false,
      isUploadingPDF: false,
      bookImage: "",
      imageURL: "",
      progress: 0,
      uploadProgress: 0,
    };
  }

  handleProgress = (progress) => this.setState({ progress });
  handleProgressPDF = (progress) => this.setState({ progress });

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("booksImages")
      .child(filename)
      .getDownloadURL()
      .then((url) => this.setState({ imageURL: url }));
  };

  handleUploadStartPDF = () =>
    this.setState({ isUploadingPDF: true, progress: 0 });
  handleUploadErrorPDF = (error) => {
    this.setState({ isUploadingPDF: false });
    console.error(error);
  };
  handleUploadSuccessPDF = (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploadingPDF: false });
    firebase
      .storage()
      .ref("booksPDF")
      .child(filename)
      .getDownloadURL()
      .then((bookurl) => this.setState({ bookURL: bookurl }));
  };
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description, bookURL, imageURL, bookImage } = this.state;
    this.ref
      .add({
        title,
        description,
        bookURL,
        imageURL,
        bookImage,
      })
      .then((docRef) => {
        this.setState({
          title: "",
          description: "",
          bookURL: "",
          bookImage: "",
          imageURL: "",
        });
        this.props.history.push(routes.books);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <Form className="" onSubmit={this.onSubmit}>
        <Card className="border-0 p-2">
          {this.state.isUploading && (
            <Progress animated value={this.state.progress} />
          )}
          <Row>
            <Col>
              <div>
                <CardHeader>Post a Book</CardHeader>
                <CardBody>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="Book Title"
                        onChange={this.onChange}
                        name="title"
                      />
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="News body"
                        type="textarea"
                        onChange={this.onChange}
                        name="description"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <FileUploader
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref("booksImages")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              {this.state.imageURL && <CardImg src={this.state.imageURL} />}
            </Col>
            <Col md={4} sm={12} xs={12}>
              <FileUploader
                accept="pdf/*"
                name="pdf"
                randomizeFilename
                storageRef={firebase.storage().ref("booksPDF")}
                onUploadStart={this.handleUploadStartPDF}
                onUploadError={this.handleUploadErrorPDF}
                onUploadSuccess={this.handleUploadSuccessPDF}
                onProgress={this.handleProgressPDF}
              />
              {this.state.isUploadingPDF && (
                <p>Progress: {this.state.progress}</p>
              )}
              {this.state.bookURL && <CardImg src={this.state.bookURL} />}
            </Col>
          </Row>
          <CardFooter align="center">
            <Button outline size="sm">
              POST
            </Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}

export default PostNews;
