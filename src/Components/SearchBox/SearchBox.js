import React, { Component } from "react";
import "./style.css";

export default class SearchBox extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.value);
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      // <form
      //   className="searchform"
      //   onSubmit={this.handleSubmit}

      // >
      //   <input
      //     className="inputserch"
      //     type="text"
      //     value={this.state.value}
      //     onChange={this.handleChange}
      //     autocomplete="off"
      //     placeholder="Search movie..."

      //   />
      //   <button className="inputbutton" type="submit"></button>
      // </form>
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.value}
          autoFocus
          placeholder="Search movie..."
        />
      </form>
    );
  }
}
