import React from "react";

export const NavBar = ({ handleClick }) => {
  return (
    <nav className="nav-container">
      <h3>Covid-Stats</h3>
      <div className="button-container">
        <button className="standard-button" onClick={handleClick}>
          Refresh
        </button>
      </div>
    </nav>
  );
};
