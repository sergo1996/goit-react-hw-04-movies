import React, { Component } from "react";
import movieAPI from "../../services/movieAPI";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";
import fadeLogo from "./transition.module.scss";
import { CSSTransition } from "react-transition-group";

export default class Home extends Component {
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
      <div className={style.block_cover}>
        <CSSTransition
          in={true}
          classNames={fadeLogo}
          timeout={500}
          appear
          unmountOnExit
        >
          <h1>Trending today</h1>
        </CSSTransition>

        {movies.length > 0 && (
          <ul className={style.block_items_list}>
            {movies.map((movie) => (
              <li className={style.block_item} key={movie.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <div className={style.block_information}>
                    <img
                      src={`${movieAPI.BASE_IMG_URL}${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span> {movie.title}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
