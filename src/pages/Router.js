import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
