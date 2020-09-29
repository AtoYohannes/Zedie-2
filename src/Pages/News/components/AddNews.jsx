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

class PostNews extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("News");
    this.state = {
      header: "",
      body: "",
      authorName: "",
      authorPhoneNumber: "",
      isUploading: false,
      images: [],
      imageURLs: [],
      progress: 0,
      uploadProgress: 0,
    };
  }
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = (progress) => this.setState({ progress });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = async (filename) => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.setState((oldState) => ({
      images: [...oldState.images, filename],
      imageURLs: [...oldState.imageURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false,
    }));
  };
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      header,
      body,
      authorName,
      authorPhoneNumber,
      imageURLs,
      images,
    } = this.state;
    this.ref
      .add({
        header,
        body,
        authorName,
        authorPhoneNumber,

        imageURLs,
        images,
      })
      .then((docRef) => {
        this.setState({
          header: "",
          body: "",
          authorName: "",
          authorPhoneNumber: "",
          images: [],
          imageURLs: [],
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <Form className="postBlogContainer" onSubmit={this.onSubmit}>
        <Card className="border-0 p-2">
          {this.state.isUploading && (
            <Progress animated value={this.state.progress} />
          )}
          <Row>
            <Col>
              <div>
                <CardHeader>Write A news</CardHeader>
                <CardBody>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="News Header"
                        onChange={this.onChange}
                        name="header"
                      />
                    </Col>

                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="News body"
                        type="textarea"
                        onChange={this.onChange}
                        name="body"
                      />
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="Author Name"
                        onChange={this.onChange}
                        name="authorName"
                      />
                    </Col>
                    <Col md={12} sm={12} xs={12}>
                      <Input
                        placeholder="Author Phone Number"
                        onChange={this.onChange}
                        name="authorPhoneNumber"
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
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                multiple
              />
              <p>images: {this.state.images.join(", ")}</p>
              <Row>
                {this.state.imageURLs.map((downloadURL, i) => {
                  return (
                    <Col
                      md={6}
                      sm={12}
                      xs={12}
                      className="addNews mr-1 mb-2 mt-2"
                    >
                      <CardImg key={i} src={downloadURL} />
                    </Col>
                  );
                })}
              </Row>
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
