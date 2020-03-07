import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Navigation = () => (
  <nav>
    <div className="logo">
      <FaMapMarkerAlt />
      <h2>
        <Link to="/">Safe Routes</Link>
      </h2>
    </div>
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
