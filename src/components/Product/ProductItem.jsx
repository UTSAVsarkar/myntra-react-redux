import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ProductItem = () => {
  const productData = useSelector((store) => store.productItems);

  return (
    <>
      <div className="container left-content-border">
        <div className="right-content">
          {productData.map((value) => {
            return <Item item={value} key={value.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
