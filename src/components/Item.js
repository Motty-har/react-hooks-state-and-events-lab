import React, {useState} from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleClick(){
    setInCart((inCart) => !inCart)
  }
  const  appClass = inCart ? "in-cart" : ""
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
