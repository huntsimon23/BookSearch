import React from "react";
import bookImage from "./bookImage.jpg";

const style = {
  backgroundImage: `url(${bookImage})`,
  width: "100%",
  height: "auto",
  clear: "both",  
  textAlign: "Left",
  color: "white",
}     

function Jumbotron({ children }) {
  return (
    <div className="jumbotron"
      style={style}
    >
      <h1 className="text-center">
                <strong>Google Books Search: a React Application</strong>
                </h1>
                <h2 className="text-center">Search for books of Interest. Save your favorites!</h2>
      {children}
    </div>
  );
}

export default Jumbotron;
