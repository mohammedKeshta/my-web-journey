import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CardMenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg top width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>
          <strong>{dish.name}</strong>
        </CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const Menu = ({ dishes, onClick }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Render Dishes */}
        {dishes.map(dish => {
          return (
            <div key={dish.id} className="col-12 col-md-5 mt-1">
              <CardMenuItem dish={dish} onClick={onClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
