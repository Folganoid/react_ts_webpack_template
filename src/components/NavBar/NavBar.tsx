import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/second">Second</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/last">Last</NavLink>
        </li>
      </ul>
    </nav>
  );
}
