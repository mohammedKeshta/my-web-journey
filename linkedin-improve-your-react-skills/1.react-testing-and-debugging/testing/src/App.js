import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import data from './courses_db.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: data
    };
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">
                Courses React
              </a>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={courses} />
        </div>
      </div>
    );
  }
}

export default App;
