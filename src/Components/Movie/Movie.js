import React from "react";
import PropTypes from "prop-types";

import movieAPI from "../../services/movieAPI";
import styles from "./Movie.module.scss";

const MovieCard = ({ movie, genres }) => (
  <div className={styles.container}>
    <img
      className={styles.img}
      // src={`${movieAPI.BASE_IMG_URL}${movie.poster_path}`}
      src={
        movie.poster_path !== null
          ? `${movieAPI.BASE_IMG_URL}${movie.poster_path}`
          : "https://i.ibb.co/XyLNv09/noimage.jpg"
      }
      alt={movie.title}
    />

    <div className={styles.description}>
      <h1>{movie.title}</h1>

      <h3>Genres</h3>
      <p>{genres}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default MovieCard;

MovieCard.propType = {
  movie: PropTypes.object,
  genres: PropTypes.string
};
