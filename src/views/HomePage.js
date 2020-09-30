import React, { Component } from "react";
import movieAPI from "../services/movieAPI";
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    this.setState({ loading: true });
    movieAPI
      .fetchTrend()
      .then((movies) => this.setState({ movies }))
      .catch((err) => this.setState({ error: err }))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
