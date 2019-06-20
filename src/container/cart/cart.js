import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  generateProductsTable = products => {
   return products.forEach( product => {
    return <div className="col-md-12">
      <div className="row">
        <div className="col-md-6">
          <p>{product.name}</p>
        </div>
        <div className="col-md-3">
          <p>{product.price}</p>
        </div>
        <div className="col-md-3">{/* <p>{product.}</p> */}</div>
      </div>
    </div>;
  });
};

  componentWillMount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.setState({
      products: cart
    });
  }

  render() {
    let products = "";
    if (this.state.products && this.state.products.length > 0) {
      products = this.generateProductsTable(...this.state.products);
    }
    return <div className="row">{products}</div>;
  }

  
}
