import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderComments = ({ comments }) => {
  if (comments === null) return <div />;

  const COMMENTS = comments.map(comment => {
    return (
      <div key={comment.id}>
        <blockquote className="blockquote">
          <p className="mb-0">{comment.comment}</p>
          <footer className="blockquote-footer">
            <cite title={comment.author}>{comment.author} , </cite>
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </footer>
        </blockquote>
      </div>
    );
  });

  return (
    <div>
      <h4>
        <strong>Comments</strong>
      </h4>
      {COMMENTS}
    </div>
  );
};

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <Card>
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  return <div />;
};

const DishDetail = ({ dish, comments }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>

          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12 col-md-5 mt-2">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 mt-2">
          <RenderComments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
