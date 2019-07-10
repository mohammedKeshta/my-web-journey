import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DISHES from '../shared/CONSTANTS';
import DishDetail from "./DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const { dishes, selectedDish} = this.state;
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
        </div>
      </div>
    );
  }
}

export default Main;
