import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {
  renderComments = comments => {
    if (comments != null) {
      const COMMENTS = comments.map(comment => {
        return (
          <div key={comment.id}>
            <blockquote className="blockquote">
              <p className="mb-0">{comment.comment}</p>
              <footer className="blockquote-footer">
                <cite title={comment.author}>{comment.author}  , </cite>
                {Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
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
    }
    return <div />;
  };

  renderDish = dish => {
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

  render() {
    const { dish } = this.props;
    const comments = dish && dish.comments ? dish.comments : null;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mt-2">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5 mt-2">
            {this.renderComments(comments)}
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetail;
