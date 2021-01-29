import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div
    style={{
      height:'100%',
      width:'100%',
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection:'column',      
    }}
  >
    <h1>404 PAGE NOT FOUND!</h1>
    <Link to="/"><h2>GO TO Home</h2></Link>
  </div>
);
export { PageNotFound as default };
