import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DISHES from '../shared/CONSTANTS';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const { dishes } = this.state;
    const HomePage = () => (
      <div>
        <Home />
      </div>
    );
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={() => <Menu dishes={dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
