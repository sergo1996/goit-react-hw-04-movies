import React from "react";
import AppBar from "./AppBar";
// import './Container.scss';

const Container = ({ children }) => (
  <div>
    <AppBar />
    <hr />
    {children}
  </div>
);
export default Container;
