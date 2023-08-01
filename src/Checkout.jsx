import "./Checkout.css";
import React from "react";
import { useStateValue } from "./Components/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg"
        alt=""
      />
      {cart?.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
          <p>
            you have no items in your basket. to buy one or more items, click
            "Add to basket" next to the items
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping BAsket</h2>

          {/* List out all of the checkout products. */}
          {cart.map((item, i) => (
            <CheckoutProduct
              key={i}
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Checkout;
