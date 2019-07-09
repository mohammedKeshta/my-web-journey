import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const { dishes } = this.props;
    const { selectedDish } = this.state;
    const MENU = dishes.map(dish => {
      return (
        <div
          key={dish.id}
          className="col-12 col-md-5 mt-1"
          onClick={() => this.onDishSelect(dish)}
        >
          <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle><strong>{dish.name}</strong></CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{MENU}</div>
        <div className="row">
          <DishDetail dish={selectedDish}/>
        </div>
      </div>
    );
  }
}
export default Menu;
