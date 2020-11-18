import React from "react";
import AppBar from "../AppBar";
import "./container.css";

const Container = ({ children }) => (
  <div className="backgraondcolor">
    <AppBar />
    {children}
  </div>
);
export default Container;
