/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./assets/common/ProductDetail";
import Login from "./assets/components/Account/Login";
import Registration from "./assets/components/Account/Registration";
import RePassword from "./assets/components/Account/RePassword";
import MyOrder from "./assets/components/MyOrder";
import OrderSuccess from "./assets/components/OrderSuccess";
import Accessory from "./assets/pages/Accessory";
import Account from "./assets/pages/Account";
import Cart from "./assets/pages/Cart";
import Catalog from "./assets/pages/Catalog";
import ContactUs from "./assets/pages/ContactUs";
import Homepage from "./assets/pages/Homepage";
import Product from "./assets/pages/Product";
import Privacy from "./assets/pages/Privacy";
export default function Routes() {
  return (
    <div className="router">
      <Switch>
        <Route path="/my-order">
          <MyOrder />
        </Route>
        <Route path="/find">
          <Accessory />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/ordersuccess">
          <OrderSuccess />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/product-detail/:id">
          <ProductDetail />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>{" "}
        <Route path="/privacy-policy">
          <Privacy />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/Re-password">
          <RePassword />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
