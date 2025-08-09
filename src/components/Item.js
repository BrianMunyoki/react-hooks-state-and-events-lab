// Item.js
import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={inCart ? "remove" : "add"}
        onClick={() => setInCart(v => !v)}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
