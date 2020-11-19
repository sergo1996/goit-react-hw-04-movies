import React, { Component } from "react";
import movieAPI from "../../services/movieAPI";
import Loader from "../Loader";
import "./style.css";

export default class Cast extends Component {
  state = {
    actors: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movId;

    this.setState({ loading: true });

    movieAPI
      .fetchActors(movieId)

      .then((actors) => this.setState({ actors: actors.cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;

    return (
      <div className="block_cover">
        {actors && (
          <>
            {loading && <Loader />}
            <h2 className="title_addition_text">Actors</h2>

            <ul className="block_item_serch">
              {actors.map((actor) => (
                <li key={actor.id}>
                  <img
                    src={
                      actor.profile_path !== null
                        ? `${movieAPI.BASE_IMG_URL}${actor.profile_path}`
                        : "https://i.ibb.co/XyLNv09/noimage.jpg"
                    }
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
