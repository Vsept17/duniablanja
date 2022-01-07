import React from "react";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  
  const state = useSelector(state => state.ProductsReducer.products)

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Products state={state} />
      </div>
    </div>
  );
};

export default Home;
