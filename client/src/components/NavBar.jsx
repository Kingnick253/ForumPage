import React from 'react';
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="navbar">
          <div className="navbar-logo">Insert Name</div>
          <div className="navbar-links">
            <button className="navbar-button">Login</button>
            <button className="navbar-button">Sign Up</button>
          </div>
        </div>
      );
}
