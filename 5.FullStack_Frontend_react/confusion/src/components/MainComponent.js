import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS, DISHES, LEADERS, PROMOTIONS } from '../shared/DB';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from "./DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS
    };
  }

  render() {
    const { dishes, promotions, leaders, comments } = this.state;
    const HomePage = () => (
      <div>
        <Home
          dish={dishes.filter(dish => dish.featured)[0]}
          promotion={promotions.filter(promotion => promotion.featured)[0]}
          leader={leaders.filter(leader => leader.featured)[0]}
        />
      </div>
    );

    const DishWithId = ({match}) => {
          const currentDishId = +match.params.id;
          return (
            <DishDetail
              dish={dishes.filter(dish =>  dish.id === currentDishId)[0]}
              comments={comments.filter(comment => comment.dishId === currentDishId)}
            />);
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
          <Route path="/menu/:id" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
