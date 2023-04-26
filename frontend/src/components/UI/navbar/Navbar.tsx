import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
