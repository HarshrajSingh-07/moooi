import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import BuyPro from "../Buycard/BuyPro";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { GiMeepleCircle } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import { BeddingBath } from "../Items/itemData1";
import { Furniture } from "../Items/itemData2";
import { Lighting } from "../Items/ItemData3";
import { HomeAccessories } from "../Items/ItemData4";
import { WallFloor } from "../Items/ItemData5";
import { BodyBeauty } from "../Items/ItemData6";
import Bag from "../Bag/Bag";
import { AllCollection } from "../Items/AllCollection";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/features/cart/cartSlice";
import Heart from "react-animated-heart";

const ProductDetail = ({ toggleCardHeight, isExpanded }) => {
  const [isClick, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item)); // Dispatch addToWishlist action with the item
  };

  const [data, setData] = useState([]);
  const [mydata, setMyData] = useState({});
  let { id, id1 } = useParams();
  let files = [
    BeddingBath,
    Furniture,
    Lighting,
    HomeAccessories,
    WallFloor,
    BodyBeauty,
    AllCollection,
  ];

  useEffect(() => {
    files.forEach((item, index) => {
      item.forEach((element, i) => {
        if (element.type === id1) {
          setData(item[id]);
        }
      });
    });
  }, [id]);

  return (
    <>
      <section id="productDetail">
        <div className="prodimg">
          <img src={data.src}></img>
        </div>
        <div className="productDetailHead">
          <h1>{data.itemname}</h1>
          <span>MOOOI, 2021</span>
          <div className="hearIcon">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>

          <div className="detailRow">
            <div className="detailLeft">
              <p>
                <h5>{data.type}</h5>
                Elevate your space with our exquisite product, {data.itemname},
                crafted to perfection. Whether it's for {data.type}, our product
                promises to captivate your senses and redefine your ambiance.
              </p>
              <button className="detailBtn">Read more</button>
            </div>

            <div className="detailRight">
              <ul>
                <li>
                  <LiaShippingFastSolid className="cart-icon" />
                  <span>Free Shipping</span>
                </li>
                <li>
                  <TbTruckReturn className="cart-icon" />
                  <span>Easy Returns Within 100 Days</span>
                </li>
                <li>
                  <GiMeepleCircle className="cart-icon" />
                  <span>5 Year Warranty after registration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ourCommitments">
          <div className="commitments">
            <h2>Our Commitments to You</h2>
            <p>
              At Moooi, we prioritize your satisfaction and convenience. Explore
              our extensive range of customer-centric policies crafted to
              elevate your shopping experience:
            </p>
          </div>
          <div className="policies">
            <div className="policy">
              <TbTruckReturn className="policy-icon" />
              <div className="innerpolicy">
                <h2>Easy Returns Within 100 Days</h2>
                <p>
                  If you're not in love with our product you may return within
                  100 days of receipt without given reasons.
                </p>
              </div>
            </div>
            <div className="policy">
              <LiaShippingFastSolid className="policy-icon" />
              <div className="innerpolicy">
                <h2>Free Shipping</h2>
                <p>Free Shipping on all orders over $100</p>
              </div>
            </div>
            <div className="policy">
              <GiMeepleCircle className="policy-icon" />
              <div className="innerpolicy">
                <h2>5 Year Warranty after registration</h2>
                <p>
                  All our lighting and furniture products come with The Button.
                  Tap it to check authenticity and register your product to get
                  extended warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuyPro
        src={data.src}
        title={data.itemname}
        price={data.price}
        toggleCardHeight={toggleCardHeight}
        isExpanded={isExpanded}
      />
    </>
  );
};

export default ProductDetail;
