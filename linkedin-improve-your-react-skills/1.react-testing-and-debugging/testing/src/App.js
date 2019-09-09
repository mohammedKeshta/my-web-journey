import React from 'react';
import './App.css';
import Grid from './Components/Grid';
import courses from './courses_db.json';

const App = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              Courses
            </a>
            {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">React</a></li>
                <li><a href="#">React Native</a></li>
                <li><a href="#">Framer</a></li>
              </ul> */}
          </div>
        </nav>
      </div>
      <div>
        <Grid items={courses} />
      </div>
    </div>
  );
};

export default App;
