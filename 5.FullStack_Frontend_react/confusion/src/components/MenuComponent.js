import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Menu = ({ dishes, onClick }) => {
  const MENU = dishes.map(dish => {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        key={dish.id}
        className="col-12 col-md-5 mt-1"
        onClick={() => onClick(dish.id)}
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
      <div className="row">
        {MENU}
      </div>
    </div>
  );
};
export default Menu;
