import React from "react";

const Product = props => {
  // console.log(props);
  return (
    <div>
      <h1>Product {props.match.params.id}</h1>
    </div>
  );
};

export default Product;
