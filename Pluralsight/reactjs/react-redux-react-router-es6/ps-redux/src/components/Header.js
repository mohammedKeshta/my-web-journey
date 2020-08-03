import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const activeMenuItem = { color: 'orange' }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" exact to="/">
            Courses Platform
          </NavLink>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeStyle={activeMenuItem} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={activeMenuItem} to="/courses">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={activeMenuItem} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
