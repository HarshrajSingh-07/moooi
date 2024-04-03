import React, { useEffect, useState } from "react";
import "./BuyPro.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/features/cart/cartSlice";
import { PiArrowFatLinesUpFill, PiArrowFatLinesDownFill } from "react-icons/pi";
import { setRef } from "@mui/material";

const BuyPro = ({ src, title, price ,isExpanded,toggleCardHeight }) => {
  const dispatch = useDispatch();
  // const [isExpanded, setIsExpanded] = useState(false);
  
  const addHandle = (item) => {
    dispatch(addToCart(item));
  };

  // const toggleCardHeight = () => {
  //   setIsExpanded(!isExpanded);
  //   const buyDetail = document.getElementById("BuyDetail");
  //   if (!isExpanded) {
  //     buyDetail.style.bottom = "-397px";
  //   } else {
  //     buyDetail.style.bottom = "0"; 
  //   }
  // };
  useEffect(()=>{
    setTimeout(() => {
      toggleCardHeight();
    }, 4000);
  },[])

  return (
    <section id="BuyProduct">
      <div
        id="BuyDetail"
        className={isExpanded ? "expanded" : "hideDown"}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="BuyProDetail">
          <div className="arrow"
           onClick={toggleCardHeight}
           >
            {isExpanded ? (
              <PiArrowFatLinesUpFill className="upDown" />
            ) : (
              <PiArrowFatLinesDownFill className="upDown" />
            )}
            <span className="arrow-text">Click here to buy</span>
          </div>
          <div className="belowclick">
            <div className="BuyImg">
              <img src={src} alt="" />
            </div>
            <div className="Product-info">
              <h2>{title}</h2>
              <div className="priceStock">
              <span className="buyprice">{price}</span>
              <span>In Stock</span>
              </div>
            </div>
            <div className="buyButton">
              <button
                onClick={() =>
                  addHandle({
                    img: src,
                    name: title,
                    price: price.slice(1),
                    quantity: 1,
                    subTotal: 0,
                  })
                }
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="productView">
          <img src={src} alt="Product Dimentions" />
        </div>
      </div>
    </section>
  );
};

export default BuyPro;
