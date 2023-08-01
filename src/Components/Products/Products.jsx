import { StartOutlined } from "@mui/icons-material";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useStateValue } from "../StateProvider";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../App";

const Products = ({ id, title, price, rating, image, text }) => {
  const { cart, setCart, cartId, setCartId } = useContext(MyContext);
  const [isCarted, setIsCarted] = useState(cartId.includes(id));
  useEffect(() => {
    localStorage.setItem("cartId", JSON.stringify(cartId));
  }, [cartId]);
  let halfRating = (rating - Math.floor(rating)) * 10;
  let outline = 0;
  halfRating > 0
    ? (outline = 5 - Math.ceil(rating))
    : (outline = 5 - Math.floor(rating));
  // const [{}, dispatch] = useStateValue();
  const RemoveFromCart = () => {
    // const arr = cart;
    setIsCarted(false);
    const index = cart.findIndex((item) => item.id == id);
    if (index != -1) {
      const arr = [...cart];
      arr.splice(index, 1);
      setCart(arr);
      localStorage.setItem("cart", JSON.stringify(arr));
    }
    const idx = cartId.indexOf(id);
    if (idx != -1) {
      const arr = [...cartId];
      arr.splice(idx, 1);
      setCartId(arr);
    }
    // cartId.remove
    // arr.splice(id, 1);
    // setCart([...arr]);
    // localStorage.setItem("cart", JSON.stringify(arr));
  };
  const addToCart = () => {
    // cart
    const itemPresent = cart.findIndex((item) => item.image == image);
    console.log(itemPresent);
    if (itemPresent != -1) return;
    const item = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    };

    setCart([...cart, item]);
    setCartId([...cartId, id]);
    setIsCarted(true);
    const localItem = JSON.parse(localStorage.getItem("cart")) || [];
    localItem.push(item);
    localStorage.setItem("cart", JSON.stringify(localItem));
  };
  return (
    <>
      <div className="Products">
        <img src={image} alt={title} />
        <div className="Products_Info">
          <p>{title}</p>
          <div className="Products_Group">
            <p className="Product_Price">
              <small>$.</small>
              <strong>{price}</strong>
            </p>
            <div className="Product_Rating">
              {/* For Full Star */}
              {Array(Math.floor(rating))
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
              {/*For Half Star */}
              {halfRating > 0 ? <StarHalfIcon /> : <></>}
              {outline > 0
                ? Array(outline)
                    .fill()
                    .map((_, index) => <StarOutlineIcon key={index} />)
                : ""}
            </div>
          </div>
        </div>
        {isCarted ? (
          <button onClick={RemoveFromCart}>Remove From Cart</button>
        ) : (
          <button onClick={addToCart}> Add To Cart</button>
        )}
      </div>
    </>
  );
};
export default Products;
