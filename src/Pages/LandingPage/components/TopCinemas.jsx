import React, { Component } from "react";
import Slider from "react-animated-slider";
import { Button } from "reactstrap";
import firebase from "../../../Config/Firebase";

class TopCinemaLists extends Component {
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
          {this.state.movies.reverse().map((movie, index) => (
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
                  ONLY AT {movie.cinemaName}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default TopCinemaLists;
