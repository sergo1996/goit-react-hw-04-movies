import React from "react";
import Loaders from "react-loader-spinner";

export default class Loader extends React.Component {
  render() {
    return <Loaders type="Oval" color="#00BFFF" height={80} width={80} />;
  }
}
