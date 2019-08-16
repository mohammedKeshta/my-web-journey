import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaListAlt } from 'react-icons/fa';

const Menu = () => (
  <nav className="menu">
    <Link to="/">
      <FaHome />
    </Link>
    <Link to="/add-day">
      <FaPlus />
    </Link>
    <Link to="/list-days">
      <FaListAlt />
    </Link>
  </nav>
);

export default Menu;
