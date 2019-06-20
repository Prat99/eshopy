import React, { Component } from "react";
import admin from "../../assets/images/user_image.png";
import oneplus from "./images/oneplus.jpg";
import "./dashboard.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("admin img", admin);
    this.state = {
      products: [
        {
          name: "One plus pro 7",
          img: "",
          desc: "48MP rear camera | 16MP front camera",
          price: 600
        },
        {
          name: "One plus pro 7",
          img: "",
          desc: "48MP rear camera | 16MP front camera",
          price: 600
        },
        {
          name: "One plus pro 7",
          img: "",
          desc: "48MP rear camera | 16MP front camera",
          price: 600
        },
        {
          name: "One plus pro 7",
          img: "",
          desc: "48MP rear camera | 16MP front camera",
          price: 600
        }
      ]
    };
  }

  addItemToCartHandler(product) {
    let cart = [];
    let productArray = [];
    const products = [];
    if (localStorage.getItem("cart")) {
      products.push(JSON.parse(localStorage.getItem("cart")));
      if(Array.isArray(products[0])) {
          productArray = [...products[0]];
          productArray.push(product);
          localStorage.setItem("cart", JSON.stringify(productArray));
      } else {
        products.push(product);
        localStorage.setItem("cart", JSON.stringify(products));
      }
    } else {
      cart.push(JSON.stringify(product));
      localStorage.setItem("cart", cart);
    }
  }

  render() {
    const products = this.generateProducts(this.state.products);
    return (
      <div>
        <div className="row">{products}</div>
      </div>
    );
  }

  generateProducts(products) {
    return products.map((product, index) => (
      <div className="col-md-3 col-lg-3" key={index}>
        <Card>
          <CardImg top width="100%" src={oneplus} alt="Card image cap" />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.desc}</CardText>
            <Button
              color="primary"
              onClick={() => this.addItemToCartHandler(product)}
            >
              Add To Cart
            </Button>
            <p className="price">$ {product.price}</p>
          </CardBody>
        </Card>
      </div>
    ));
  }
}
