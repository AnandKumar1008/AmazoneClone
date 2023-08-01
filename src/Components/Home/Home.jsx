import "./Home.css";
import Products from "../Products/Products";
import React from "react";
//import faker from "faker";
//import {toast} from "react-toastify";
import { arr } from "../../Items";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => Slider(0), []);
  return (
    <>
      <div className="home">
        <div className="home_Container">
          {/*  */}
          <div className="HomeToastContainer">
            <ToastContainer />
          </div>
          <div className="homeSliderContainer">
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
                alt="Amazon_home_page"
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/Deals-Unrec-Apay-3000-1200._CB603212230_.jpg"
                alt="Amazon_home_page"
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Skincare-Herofader-PC._CB594538667_.jpg"
                alt="Amazon_home_page"
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/July23/PC_3000x1200_2x._CB602705602_.jpg"
                alt="Amazon_home_page"
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/SVD/July/Hero/PC_tall_Hero_SVD_UNREC_set1_icici_3000x1200._CB602708645_.jpg"
                alt="Amazon_home_page"
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_eth_3000._CB603210873_.jpg"
                alt="Amazon_home_page"
              />
            </div>
          </div>

          {/*Products=>Product ID,Title,Rating,Price,Img*/}
          <div className="Home_Row">
            <Products
              id={12323}
              title="New Limitless FS1 Smart Watch|Biggest 1.95"
              price={700}
              rating={5}
              image="https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="Reflex Vox Smartwatch|Alexa Built-in|Bright"
              price={780}
              rating={4}
              image="https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="Timex Analog Brown Dial Men's Watch-TW000U"
              price={900}
              rating={3.7}
              image="https://m.media-amazon.com/images/I/41v9XJmMnVL._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="Reflex Play|1.3” AMOLED Display Smart Watch"
              price={500}
              rating={5}
              image="https://m.media-amazon.com/images/I/41yB4-jJnML._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="Neo Analog Dial Men's Watch also a smart watch"
              price={770}
              rating={3.5}
              image="https://m.media-amazon.com/images/I/412zSuiAK-L._AC_SR400,600_.jpg"
            />
          </div>

          {/* Second Row */}
          <div className="Home_Row">
            <Products
              id={12323}
              title="Think Straight: Change your thoughts, Change "
              price={77}
              rating={4}
              image="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY218_.jpg"
            />
            <Products
              id={12323}
              title="Price Action Trading : Technical Analysis Simplified!"
              price={547}
              rating={4.5}
              image="https://m.media-amazon.com/images/I/61ruD5Uk7cS._AC_UY218_.jpg"
            />
            {arr.map((item, i) => (
              <Products
                key={i}
                title={item.title}
                price={item.price}
                rating={4.5}
                image={item.image}
              />
            ))}
            <Products
              id={12323}
              title="The Power of Your Subconscious Mind is good"
              price={345}
              rating={4.2}
              image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg"
            />
            <Products
              id={12323}
              title="Think and Grow Rich: THE 21st CENTURY EDITION"
              price={88}
              rating={4}
              image="https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY218_.jpg"
            />
          </div>

          {/* Third Row */}
          <div className="Home_Row">
            <Products
              id={12323}
              title="Nokia C12 Pro Android Smartphone, Dual SIM, All Day Battery "
              price={5477}
              rating={4.3}
              image="https://m.media-amazon.com/images/I/71dg6tYqtML._AC_UY218_.jpg"
            />
            <Products
              id={12323}
              title="HP Laptop 15s, 11th Gen Intel Core Graphics, Thin & Light"
              price={70009}
              rating={4}
              image="https://m.media-amazon.com/images/I/81W7QY3IWtL._AC_UY218_.jpg"
            />
            <Products
              id={12323}
              title="Dell Vostro 3420 Laptop,Intel i5-1135G7/16GB/512GB SSD/14.0"
              price={45000}
              rating={4.5}
              image="https://m.media-amazon.com/images/I/51LueG8KfqL._AC_UY218_.jpg"
            />
          </div>

          {/* Fourth Row */}
          <div className="Home_Row">
            <Products
              id={12323}
              title="Sure From Aquaguard Delight NXT RO+UV+Taste Adjuster(MTDS) "
              price={300}
              rating={5}
              image="https://m.media-amazon.com/images/I/31T-YkcekBL._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="HUL Pureit Vital Plus Mineral RO+UV+MP 6 Stage, 7L "
              price={900}
              rating={3.5}
              image="https://m.media-amazon.com/images/I/31qSi+4hxAL._AC_SR400,600_.jpg"
            />
            <Products
              id={12323}
              title="Havells Instanio 1-Litre Instant Geyser (White/Blue)"
              price={790}
              rating={3.5}
              image="https://m.media-amazon.com/images/I/31991seDfcL._SY300_SX300_QL70_FMwebp_.jpg"
            />
            <Products
              id={12323}
              title="Lloyd 1.5 Ton 3 Star Inverter Split AC is good for cool & calm"
              price={77770}
              rating={5}
              image="https://m.media-amazon.com/images/I/31UISB90sYL._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// for the slider.
function Slider(Counter) {
  const slides = document.querySelectorAll(".homeImg");
  slides.forEach((slide, index) => {
    if (index !== Counter) {
      slide.computedStyleMap.visiability = "hidden";
      slide.classList.add("image-${index}");
    }
  });
  moveCorousal(Counter, slides, slides.length);
}

function moveCorousal(Counter, slides, len) {
  if (slides) {
    if (Counter >= len - 1) Counter = 0;
    else Counter += 1;
    slides.forEach((slide, index) => {
      if (index === Counter) {
        slide.style.visibility = "visible";
      } else {
        slide.style.visibility = "hidden";
      }
    });
  }
  setTimeout(() => {
    moveCorousal(Counter, slides, len);
  }, 4000);
}
export default Home;
