import { StartOutlined } from "@mui/icons-material";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useStateValue } from "../StateProvider";
import React, { useContext } from "react";
import { MyContext } from "../../App";

const Products = ({ id, title, price, rating, image, btnText = "" }) => {
  const { cart, setCart } = useContext(MyContext);
  let halfRating = (rating - Math.floor(rating)) * 10;
  let outline = 0;
  halfRating > 0
    ? (outline = 5 - Math.ceil(rating))
    : (outline = 5 - Math.floor(rating));
  // const [{}, dispatch] = useStateValue();
  const handleClick = () => {
    const arr = cart;
    arr.splice(id, 1);
    setCart([...arr]);
    localStorage.setItem("cart", JSON.stringify(arr));
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
    console.log(item);
    console.log(cart);
    setCart([...cart, item]);
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
        {btnText ? (
          <button onClick={handleClick}>Remove From Cart</button>
        ) : (
          <button onClick={addToCart}> Add To Cart</button>
        )}
      </div>
    </>
  );
};
export default Products;
