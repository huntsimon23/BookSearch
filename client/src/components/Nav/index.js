import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="/">
      <button type="button" className="btn btn-outline-light">Seach Books on books.google.com</button>
      </a>
      <a href="/saved">
      <button type="button" className="btn btn-outline-light">Saved Books</button></a>
    </nav>
  );
}

export default Nav;
