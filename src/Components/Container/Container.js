import React from "react";
import AppBar from "../AppBar";
import PropTypes from "prop-types";

const Container = ({ children }) => (
  <div className="backgraondcolor">
    <AppBar />
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
