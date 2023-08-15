import React, { useContext } from "react";
import "./Card.css";
import { MyContext } from "../../App";
const Card = ({ item, i }) => {
  const { setCart, cart } = useContext(MyContext);
  return (
    <div className="amazone_clone-card">
      <div className="amazone_clone-card_left">
        <img src={item?.image} alt="" />
      </div>
      <div className="amazone_clone-card_right">
        <div className="amazone_clone-card_heading">
          <h2>{item?.title}</h2>
          <p>by Amazone Company</p>
          <p>Rs{item?.price}</p>
          <p>in stock</p>
          <p>Eligible for FREE Shipping</p>
          <p>
            Gift options not available.Gift options not available. Learn more
          </p>
          <input type="number" value={1} />
          <button
            onClick={() => {
              const arr = [...cart];
              arr.splice(i, 1);
              setCart(arr);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
