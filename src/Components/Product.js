import React, { useState, useEffect } from "react";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestproducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const json = await res.json();
      setProducts(json);
    }

    requestproducts();
  }, []);

  console.log(products);

  return (
    <div id="items">
      {products.slice(0, 6).map((product) => {
        return (
          <div className="container">
            <span>{product.title}</span>
            <span className="price">{product.price}</span>
            <img src={product.image} className="pic" />
            <button>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}
