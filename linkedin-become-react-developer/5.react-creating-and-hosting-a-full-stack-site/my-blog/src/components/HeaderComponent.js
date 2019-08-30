import * as React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => (
  <div className="container">
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12 text-center">
          <NavLink to="/" className="blog-header-logo text-dark" href="#">
            Mohammed Elzanaty | Blog
          </NavLink>
        </div>
      </div>
    </header>

    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex">
        <NavLink to="/" className="p-2 text-muted" href="#">
          Home
        </NavLink>
        <NavLink to="/about" className="p-2 text-muted" href="#">
          About
        </NavLink>
        <NavLink to="/article" className="p-2 text-muted" href="#">
          Article
        </NavLink>
      </nav>
    </div>
  </div>
);

export default HeaderComponent;
