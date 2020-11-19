import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import getQueryParams from "../../services/utils/getQueryParams";
import movieAPI from "../../services/movieAPI";
import SearchBox from "../../Components/SearchBox";
import Loader from "../../Components/Loader";
import style from "./style.module.scss";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    //проверяем наличие query, если есь, то происходит рендер
    if (query) {
      this.fetchMovie(query);
    } else {
      this.fetchMovie("science");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);

    const { query: nextQuery } = getQueryParams(this.props.location.search);

    //сравниваем предыдущий запрос и текущий; если они не равны, делаем фетч
    if (prevQuery !== nextQuery) {
      this.fetchMovie(nextQuery);
    }
  }

  fetchMovie = (query) => {
    this.setState({ loading: true });
    movieAPI
      .fetchSearch(query)
      .then((movies) => this.setState({ movies }))
      .catch((err) => this.setState({ error: err }))
      .finally(this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    //при сабмите формы произойдет новая запись истории, изменится url
    this.props.history.push({
      ...this.props.location, //распыляем текущее местоположение
      search: `query=${query}`, //и заменяем в нем search
    });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <div className={style.block_cover}>
        <SearchBox onSubmit={this.handleChangeQuery} />
        {loading && <Loader />}
        {movies.length > 0 && (
          <ul className={style.block_items_list}>
            {movies.map((movie) => (
              <li className={style.block_item} key={movie.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <div className={style.block_information}>
                    <img
                      style={{ height: "350px" }}
                      src={
                        movie.poster_path !== null
                          ? `${movieAPI.BASE_IMG_URL}${movie.poster_path}`
                          : "https://i.ibb.co/XyLNv09/noimage.jpg"
                      }
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
