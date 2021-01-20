import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <h2> Homepage - </h2>
      </Link>
      <Link to="/shop">
        <h2> - Shop </h2>{" "}
      </Link>
    </div>
  </header>
);

export default Header;
