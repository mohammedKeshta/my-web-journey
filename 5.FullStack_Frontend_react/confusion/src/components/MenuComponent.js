import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import CardText from 'reactstrap/es/CardText';

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

  renderSelectedDish() {
    const { selectedDish } = this.state;
    if (selectedDish != null) {
      return (
        <div className="col-12 col-md-10 mt-5">
          <Card>
            <CardImg
              top
              width="100%"
              src={selectedDish.image}
              alt={selectedDish.name}
            />
            <CardBody>
              <CardTitle>{selectedDish.name}</CardTitle>
              <CardText>{selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div />;
  }

  render() {
    const { dishes } = this.props;
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
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{MENU}</div>
        <div className="row">{this.renderSelectedDish()}</div>
      </div>
    );
  }
}
export default Menu;
