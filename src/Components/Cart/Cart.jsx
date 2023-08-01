import { MyContext } from "../../App";
import Products from "../Products/Products";
import "./Cart.css";
import React, { useContext } from "react";
const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  return (
    <>
      <div className="Cart">
        {/* <h1>hare kriehna</h1> */}
        <div className="CartLeft">
          {
            <img
              className="CartAdd"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD23/Cat_FT_PC.jpg"
              alt="Cart_Add"
            />
          }
          {Cart.length === 0 || (
            <div className>
              <h1>Your cart is Empty</h1>
              <img
                className="EmptyCart"
                src="data:image/png;base64,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"
                alt="CartEmptyImage"
              />
            </div>
          )}
          {cart.map((item, i) => (
            <div className="amazone_clone-cart_item" key={i}>
              <Products
                id={i}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                btnText={"Remove From cart"}
              />
              {/* <button
                className="remove_clone-remove_from_cart"
                onClick={() => {
                  const arr = cart;
                  arr.splice(i, 1);
                  setCart([...arr]);
                  localStorage.setItem("cart", JSON.stringify(arr));
                }}
              >
                Remove Cart
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
