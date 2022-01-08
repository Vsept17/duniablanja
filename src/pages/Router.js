import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/create-product" component={Product} />
    </BrowserRouter>
  );
};

export default Router;
