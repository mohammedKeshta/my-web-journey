import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

class Main extends Component {
  render() {
    const { dishes, promotions, leaders, comments } = this.props;
    const HomePage = () => (
      <div>
        <Home
          dish={dishes.filter(dish => dish.featured)[0]}
          promotion={promotions.filter(promotion => promotion.featured)[0]}
          leader={leaders.filter(leader => leader.featured)[0]}
        />
      </div>
    );

    const DishWithId = ({ match }) => {
      const currentDishId = +match.params.id;
      return (
        <DishDetail
          dish={dishes.filter(dish => dish.id === currentDishId)[0]}
          comments={comments.filter(
            comment => comment.dishId === currentDishId
          )}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={dishes} />}
          />
          <Route path="/menu/:id" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
