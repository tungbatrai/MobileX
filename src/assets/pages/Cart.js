import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function Cart() {
  return (
    <div className="cart-page">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Your Shopping Cart</Breadcrumb.Item>
        </Breadcrumb>
        <div className="box-cart">adad</div>
      </div>
    </div>
  );
}
