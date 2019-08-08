import React, { Component } from 'react';
import './App.css';

const Product = props => {
  const { name, price, image_title, image } = props.product;
  return (
    <div className="wrapper">
      <div className="product--blue">
        <div className="product_inner">
          <img src={image} width="150" alt={image_title} />
          <h2>{name}</h2>
          <p>Price {price}$</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

class ReactAdditionalLibraryFeature extends Component {
  // projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  state = {
    loading: true,
    products: []
  };

  componentDidMount() {
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/10')
      .then(data => data.json())
      .then(products => this.setState({ loading: false, products }));
  }

  render() {
    const { loading, products } = this.state;
    return (
      <div className="App">
        <div className="row">
          {loading && <div> Loading .... </div>}
          {!loading && products.length === 0 && (
            <div>There is no product now </div>
          )}

          {!loading &&
            products.length &&
            products.map(product => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    );
  }
}

export default ReactAdditionalLibraryFeature;
