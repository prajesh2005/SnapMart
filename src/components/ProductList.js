import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products available in the Carts</h1>
    // if length of items is 0...that is cart is empty...then show the above message
  );
}
