import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <nav-brand>
            <img src="" />
          </nav-brand>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </nav>
        <h1>hello new </h1>
      </>
    );
  }
}
export default Header;
