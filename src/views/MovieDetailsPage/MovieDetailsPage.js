import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import "./styleMoviesDetailPage.css";

import movieAPI from "../../services/movieAPI";
import MovieCard from "../../Components/Movie";

import Loader from "react-loader-spinner";
const asyncCast = lazy(() =>
  import("../../Components/Cast" /* webpackChunkName: "movie_cast" */)
);
const asyncReviews = lazy(() =>
  import("../../Components/Reviews" /* webpackChunkName: "movie_reviews" */)
);

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
      <div className="block_cover">
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

        <h3 className="title_addition_text">Additional</h3>
        <ul className="block_botom">
          <li>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
              }}
              className="navigationlink"
              activeClassName="active_link"
              to={{
                pathname: match.url + pathname.cast,
                state: { from: stateFrom },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigationlink"
              style={{
                textDecoration: "none",
                color: "white",
              }}
              activeClassName="active_link"
              to={{
                pathname: match.url + pathname.reviews,
                state: { from: stateFrom },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Route path={`${match.path}${pathname.cast}`} component={asyncCast} />
          <Route
            path={`${match.path}${pathname.reviews}`}
            component={asyncReviews}
          />
        </Suspense>
      </div>
    );
  }
}
