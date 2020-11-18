import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import movieAPI from "../services/movieAPI";
import MovieCard from "../Components/Movie";

const pathname = {
  cast: "/cast",
  reviews: "/reviews",
};

export default class MovieDetails extends Component {
  state = {
    movie: null,
    genres: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movId } = this.props.match.params;
    // console.log(movId);

    movieAPI
      .fetchDetails(movId)
      .then((movie) => this.setState({ movie, genres: movie.genres }))
      .catch((err) => console.log(err));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    // переход на страницу movies, если фильм был открыт в новой вкладке
    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;
    const { state } = this.props.location;
    const { movie } = this.state;
    let stateFrom = state && state.from ? state.from : "/";

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <br />

        {this.state.error && <p>Error:{this.state.error}</p>}

        {movie && (
          <MovieCard
            movie={movie}
            // poster_path={movie.poster_path}
            genres={this.state.genres.map((genre) => genre.name).toString()}
          />
        )}

        <h3>Additional</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: match.url + pathname.cast,
                state: { from: stateFrom },
              }}
            >
              Cast
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={{
                pathname: match.url + pathname.reviews,
                state: { from: stateFrom },
              }}
            >
              Reviews
            </NavLink>
          </li> */}
        </ul>
      </>
    );
  }
}
