import { StartOutlined } from "@mui/icons-material";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useStateValue } from "../StateProvider";
import React, { useContext } from "react";
import { MyContext } from "../../App";

const Products = ({ id, title, price, rating, image }) => {
  const { cart, setCart } = useContext(MyContext);
  let halfRating = (rating - Math.floor(rating)) * 10;
  let outline = 0;
  halfRating > 0
    ? (outline = 5 - Math.ceil(rating))
    : (outline = 5 - Math.floor(rating));
  // const [{}, dispatch] = useStateValue();
  const addToCart = () => {
    // cart

    console.log(image);
    if (itemPresent !== -1) return;
    console.log(itemPresent);
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
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </>
  );
};
export default Products;