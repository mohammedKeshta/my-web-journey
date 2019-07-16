import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const CardMenuItem = ({ dish }) => {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>
            <strong>{dish.name}</strong>
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = ({ dishes }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active tag="span">Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {/* Render Dishes */}
        {dishes.map(dish => {
          return (
            <div key={dish.id} className="col-12 col-md-6 mb-3">
              <CardMenuItem dish={dish} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
