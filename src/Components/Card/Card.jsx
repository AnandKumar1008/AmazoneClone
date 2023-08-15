import React from "react";
import "./Card.css";
const Card = ({ item }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Card;
