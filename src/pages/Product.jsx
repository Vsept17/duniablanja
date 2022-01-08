import React, { useState } from "react";
import axios from "axios";
import CreateProduct from "../components/CreateProduct";
import Navbar from "../components/Navbar";
import { useId } from "react-id-generator";

const Product = () => {
  const [getId, setGetId] = useState(useId());
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [stock, setStock] = useState("");

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "duniablanja");

    return await axios
      .post("https://api.cloudinary.com/v1_1/dnggdxaik/image/upload", data)
      .then((res) => {
        setImage(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <CreateProduct
          getId={getId}
          image={image}
          setImage={setImage}
          productName={productName}
          setProductName={setProductName}
          buyPrice={buyPrice}
          setBuyprice={setBuyPrice}
          sellPrice={sellPrice}
          setSellPrice={setSellPrice}
          stock={stock}
          setStock={setStock}
          uploadFile={uploadFile}
        />
      </div>
    </div>
  );
};

export default Product;
