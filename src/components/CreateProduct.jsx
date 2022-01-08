import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action/ProductsAction";
import { Link } from "react-router-dom";
import Modal from "react-modal";

// Modal.setAppElement('#yourAppElement');
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const CreateProduct = ({
  getId,
  productName,
  buyPrice,
  sellPrice,
  stock,
  image,
  setProductName,
  setBuyprice,
  setSellPrice,
  setStock,
  uploadFile,
  setimage,
}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const dispatch = useDispatch();

  console.log(productName);
  return (
    <div className="bg-gray-200 rounded-lg p-2 my-4">
      <div className="flex m-4">
        <p className="w-1/6">Add Product Image:</p>
        <div className="flex flex-row">
          <input
            type="file"
            name="file"
            className=""
            onChange={(e) => uploadFile(e)}
          />
          <img
            src={image}
            className="w-1/4"
            alt={image === "" ? null : "image"}
          />
        </div>
      </div>
      <div className="flex m-4">
        <p className="w-1/6">Add Product:</p>
        <input
          className="border-purple-300 border-2 rounded-md focus:outline-purple-600 "
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="flex m-4">
        <p className="w-1/6">Add Buy Price:</p>
        <input
          type="number"
          className="border-purple-300 border-2 rounded-md focus:outline-purple-600 "
          value={buyPrice}
          onChange={(e) => setBuyprice(e.target.value)}
        />
      </div>
      <div className="flex m-4">
        <p className="w-1/6">Add Sell Price :</p>
        <input
          type="number"
          className="border-purple-300 border-2 rounded-md focus:outline-purple-600 "
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
      </div>
      <div className="flex m-4">
        <p className="w-1/6">Stock:</p>
        <select
          defaultValue="Ready"
          onChange={(e) => setStock(e.target.value)}
          className="border-purple-300 border-2 rounded-md focus:outline-purple-600 w-1/5 "
        >
          <option value="Ready">Ready</option>
          <option value="Sold">Sold</option>
        </select>
      </div>
      <div className="w-full flex">
        <button
          onClick={() => setVisibleModal(true)}
          className="bg-green-400 px-4 py-2 rounded-xl mb-4"
        >
          Submit
        </button>
      </div>
      <Modal isOpen={visibleModal} style={customStyles}>
        <div className="flex flex-col justify-center">
          <div>
            <h1>Are sure want to submit data?</h1>
          </div>
          <div>
            <button
              className="bg-red-400 px-4 py-1 rounded-xl mb-4"
              onClick={() => setVisibleModal(false)}
            >
              No
            </button>
            <Link
              className="bg-green-400 px-4 py-2 rounded-xl mb-4"
              to={{
                pathname: `/`,
              }}
              onClick={() =>
                dispatch(
                  addProduct({
                    getId,
                    productName,
                    buyPrice,
                    sellPrice,
                    stock,
                    image,
                  })
                )
              }
            >
              Yes
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateProduct;
