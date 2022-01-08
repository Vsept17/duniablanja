import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/action";

const Products = ({ state }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log("location", location());

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    return dispatch(deleteProduct(e));
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end m-4">
        <Link
          className="bg-red-400 py-2 px-8 rounded-md hover:bg-red-500"
          to={{
            pathname: `/create-product`,
          }}
        >
          Add Product
        </Link>
      </div>
      <div className="flex flex-row">
        {state.length === 0 ? (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-2">Your product is empty!</h1>
            <p>Add your product first..</p>
          </div>
        ) : (
          state &&
          state.map(
            ({ image, productName, buyPrice, sellPrice, stock, getId }) => {
              return (
                <div
                  key={getId}
                  className="w-1/5 rounded-md drop-shadow-md border-black bg-gray-200 m-2 overflow-hidden"
                >
                  <div className="h-36">
                    <img src={image} />
                  </div>
                  <div className="p-2">
                    <p className="font-bold ">{productName}</p>
                    <div className="flex flex-row">
                      <p>Buy</p>
                      <p className="text-green-600 ml-2">Rp. {buyPrice}</p>
                    </div>
                    <div className="flex flex-row">
                      <p>Sell</p>
                      <p className="text-red-600 ml-2">Rp. {sellPrice}</p>
                    </div>
                    <p>{stock}</p>
                  </div>
                  <div className="flex flex-row justify-between p-2">
                    <Link
                      to={{
                        pathname: "/create-product",
                        props: {
                          image,
                          productName,
                          buyPrice,
                          sellPrice,
                          stock,
                          getId,
                        },
                      }}
                      // onClick={() =>
                      //   navigate("/create-product", {
                      //     replace: true,

                      //       image,
                      //       productName,
                      //       buyPrice,
                      //       sellPrice,
                      //       stock,
                      //       getId,

                      //   })
                      // }
                      className="bg-yellow-400 px-4 py-2 rounded-xl"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDeleteProduct(e, getId)}
                      className="bg-red-600 px-4 py-2 rounded-xl text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Products;
