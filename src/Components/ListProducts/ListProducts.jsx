import "./ListProducts.css";
import Products from "../Products/Products";
import React from "react";

const ListProducts = () => {
  return (
    <>
      <div className="ListProducts">
        <div className="ProductListRow">
          <Products
            id={1}
            title="New Limitless FS1 Smart Watch|Biggest 1.95"
            price={700}
            rating={5}
            image="https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SR400,600_.jpg"
          />
          <Products
            id={2}
            title="Reflex Vox Smartwatch|Alexa Built-in|Bright"
            price={780}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SR400,600_.jpg"
          />
          <Products
            id={3}
            title="Timex Analog Brown Dial Men's Watch-TW000U"
            price={900}
            rating={3.7}
            image="https://m.media-amazon.com/images/I/41v9XJmMnVL._AC_SR400,600_.jpg"
          />
          <Products
            id={4}
            title="Reflex Play|1.3” AMOLED Display Smart Watch"
            price={500}
            rating={5}
            image="https://m.media-amazon.com/images/I/41yB4-jJnML._AC_SR400,600_.jpg"
          />
          <Products
            id={5}
            title="Neo Analog Dial Men's Watch also a smart watch"
            price={770}
            rating={3.5}
            image="https://m.media-amazon.com/images/I/412zSuiAK-L._AC_SR400,600_.jpg"
          />
        </div>

        {/* Second Row */}
        <div className="ProductListRow">
          <Products
            id={6}
            title="Think Straight: Change your thoughts, Change "
            price={77}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY218_.jpg"
          />
          <Products
            id={7}
            title="Price Action Trading : Technical Analysis Simplified!"
            price={547}
            rating={4.5}
            image="https://m.media-amazon.com/images/I/61ruD5Uk7cS._AC_UY218_.jpg"
          />
          <Products
            id={8}
            title="The Power of Your Subconscious Mind is good"
            price={345}
            rating={4.2}
            image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg"
          />
          <Products
            id={9}
            title="Think and Grow Rich: THE 21st CENTURY EDITION"
            price={88}
            rating={4}
            image="https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY218_.jpg"
          />
        </div>

        {/* Third Row */}
        <div className="ProductListRow">
          <Products
            id={10}
            title="Nokia C12 Pro Android Smartphone, Dual SIM, All Day Battery "
            price={5477}
            rating={4.3}
            image="https://m.media-amazon.com/images/I/71dg6tYqtML._AC_UY218_.jpg"
          />
          <Products
            id={11}
            title="HP Laptop 15s, 11th Gen Intel Core Graphics, Thin & Light"
            price={70009}
            rating={4}
            image="https://m.media-amazon.com/images/I/81W7QY3IWtL._AC_UY218_.jpg"
          />
          <Products
            id={12}
            title="Dell Vostro 3420 Laptop,Intel i5-1135G7/16GB/512GB SSD/14.0"
            price={45000}
            rating={4.5}
            image="https://m.media-amazon.com/images/I/51LueG8KfqL._AC_UY218_.jpg"
          />
        </div>

        {/* Fourth Row */}
        <div className="ProductListRow">
          <Products
            id={13}
            title="Sure From Aquaguard Delight NXT RO+UV+Taste Adjuster(MTDS) "
            price={300}
            rating={5}
            image="https://m.media-amazon.com/images/I/31T-YkcekBL._AC_SR400,600_.jpg"
          />
          <Products
            id={14}
            title="HUL Pureit Vital Plus Mineral RO+UV+MP 6 Stage, 7L "
            price={900}
            rating={3.5}
            image="https://m.media-amazon.com/images/I/31qSi+4hxAL._AC_SR400,600_.jpg"
          />
          <Products
            id={15}
            title="Havells Instanio 1-Litre Instant Geyser (White/Blue)"
            price={790}
            rating={3.5}
            image="https://m.media-amazon.com/images/I/31991seDfcL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Products
            id={16}
            title="Lloyd 1.5 Ton 3 Star Inverter Split AC is good for cool & calm"
            price={77770}
            rating={5}
            image="https://m.media-amazon.com/images/I/31UISB90sYL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default ListProducts;
