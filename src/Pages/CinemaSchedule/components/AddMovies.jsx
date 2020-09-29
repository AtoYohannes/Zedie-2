import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Col,
  Button,
  CardImg,
} from "reactstrap";
import firebase from "../../../Config/Firebase";
import routes from "../../../Config/routes";
import FileUploader from "react-firebase-file-uploader";

class AddMovies extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Movies");
    this.state = {
      cinemaName: "",
      movieTitle: "",
      movieDescription: "",
      startingTime: "",
      endingTime: "",
      date: "",
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
      .ref("moviesImage")
      .child(filename)
      .getDownloadURL()
      .then((url) => this.setState({ imageURL: url }));
  };
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      cinemaName,
      movieTitle,
      movieDescription,
      startingTime,
      endingTime,
      date,
      imageURL,
    } = this.state;
    this.ref
      .add({
        cinemaName,
        movieTitle,
        movieDescription,
        startingTime,
        endingTime,
        date,
        imageURL,
      })
      .then((docRef) => {
        this.setState({
          cinemaName: "",
          movieTitle: "",
          movieDescription: "",
          startingTime: "",
          endingTime: "",
          date: "",
          imageURL: "",
        });
        this.props.history.push(routes.cinemaSchedules);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <div className="directoriesContainer">
        <Card className="mt-5">
          <CardHeader>Add Movie</CardHeader>
          <CardBody>
            <Form onSubmit={this.onSubmit}>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="cinemaName"
                  placeholder="Cinema Name"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="movieTitle"
                  placeholder="Movie Title"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="movieDescription"
                  placeholder="Movie Description"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="date"
                  placeholder="Date"
                  type="date"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="startingTime"
                  placeholder="Starting Time"
                  type="time"
                />
              </Col>
              <Col>
                <Input
                  onChange={this.onChange}
                  name="endingTime"
                  placeholder="Ending Time"
                  type="time"
                />
              </Col>
              <Col>
                <FileUploader
                  accept="image/*"
                  name="image"
                  randomizeFilename
                  storageRef={firebase.storage().ref("moviesImage")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
                {this.state.isUploading && (
                  <p>Progress: {this.state.progress}</p>
                )}
                {this.state.imageURL && <CardImg src={this.state.imageURL} />}
              </Col>

              <Col align="center" className="mt-3">
                <Button outline>Add Movie</Button>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddMovies;
