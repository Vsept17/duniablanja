import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row justify-between items-center bg-amber-400 p-2">
      <Link to={{
        pathname: '/'
      }}>
        <h1 className="font-bold px-4">Dunia Blanja</h1>
      </Link>
    </div>
  );
};

export default Navbar;
