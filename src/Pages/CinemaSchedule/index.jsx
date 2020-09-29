import React, { Component } from "react";
import Slider from "react-animated-slider";
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { MdTimelapse } from "react-icons/md";
import firebase from "../../Config/Firebase";
import Translate from 'react-translate-component';

class CinemaSchedule extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Movies");
    this.unsubscribe = null;
    this.state = {
      movies: [],
      isMobile: false,
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const movies = [];
    querySnapshot.forEach((doc) => {
      const {
        cinemaName,
        date,
        movieTitle,
        startingTime,
        endingTime,
        movieDescription,
        imageURL,
      } = doc.data();
      movies.push({
        key: doc.id,
        doc, // DocumentSnapshot
        cinemaName,
        date,
        movieTitle,
        startingTime,
        endingTime,
        movieDescription,
        imageURL,
      });
    });
    this.setState({
      movies,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div>
        <Slider autoplay={3000} className="slider-wrapper">
          {this.state.movies.map((movie, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${movie.imageURL}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{movie.movieTitle}</h1>
                <p>{movie.movieDescription}</p>
                <Button outline color="light">
                <Translate content="only" />{movie.cinemaName}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
        {/* <Divider title="በቅርብ የሚታዩ ፊልሞች" /> */}
        <Translate content="up" component="h3" className="divider bg-background mt-3 mb-3  text-primary text-uppercase"/>
        <div className="moviesContainer">
          <Row>
            {this.state.movies.reverse().map((movie, index) => (
              <Col md={3} sm={12} xs={12} key={index}>
                <Card className="border-0 movieListContainer zoom mb-3">
                  <CardHeader>{movie.movieTitle}</CardHeader>
                  <CardImg src={movie.imageURL} />
                  <CardBody>
                    <CardTitle>{movie.cinemaName}</CardTitle>
                    <CardText>{movie.date}</CardText>
                    <CardSubtitle className="d-flex justify-content-between align-items-center">
                      <Col>
                        <MdTimelapse className="pr-1" />
                        {movie.startingTime}
                      </Col>
                      <Col> <Translate content="to" /></Col>
                      <Col>
                        {movie.endingTime} <MdTimelapse className="pl-1" />
                      </Col>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default CinemaSchedule;
