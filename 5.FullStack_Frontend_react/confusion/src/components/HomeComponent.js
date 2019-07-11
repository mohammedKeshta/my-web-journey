import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';

const RenderCard = ({ item }) => (
  <Card>
    <CardImg src={item.image} alt={item.name} />
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      {item.designation ? (
        <CardSubtitle>{item.designation}</CardSubtitle>
      ) : null}
      <CardText>{item.description}</CardText>
    </CardBody>
  </Card>
);
const Home = ({ dish, promotion, leader }) => {
  console.log(dish);
  console.log(promotion);
  console.log(leader);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
