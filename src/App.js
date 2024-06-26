import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Browse-our-collection/Collection";
import Design from "./components/Design-Dream/Design";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Menu from "./components/menu-btn/Menu";
import Presents from "./components/moooi-Presents/Presents";
import Podcast from "./components/podcast/Podcast";
import Product from "./components/Product-story/Productstory";
import Strategy from "./components/Strategy/Strategy";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup.jsx";
import Items from "./components/Items/Items";
import { BeddingBath, BeddingBathhead } from "./components/Items/itemData1";
import { Furniture, Furnitureobj } from "./components/Items/itemData2";
import { Lighting, LightingHead } from "./components/Items/ItemData3.js";
import {
  HomeAccessories,
  HomeAccessoriesHead,
} from "./components/Items/ItemData4.js";
import { WallFloor, WallFloorHead } from "./components/Items/ItemData5.js";
import { BodyBeauty, BodyBeautyHead } from "./components/Items/ItemData6.js";
import {
  AllCollection,
  collectionhead,
} from "./components/Items/AllCollection.js";
import ProductDetail from "./components/Product-Detail/ProductDetail";
import ScrollToTop from "./ScrollToTop.jsx";
import OrderSummary from "./components/Order summary/OrderSummary.jsx";
import Contact from "./components/Contact/Contact.jsx";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Preloader from "./components/Preloder/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [openSignupPop, setOpenSignupPop] = useState(false);

  const [SuccessMsg, setSuccessMsg] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const sectionRefs = useRef({});

  const handleSearch = () => {
    // Logic to scroll to the section based on the search query
    const sectionId = searchQuery.toLowerCase().replace(" ", "-");
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleCardHeight = () => {
    setIsExpanded(!isExpanded);
  };
  const HideBuyWhenCartOpen = () => {
    setIsExpanded(false);
  };

  const handleOpen = (msg) => {
    setOpen(true);
    setSuccessMsg(msg);
  };

  const handleClose = (msg) => {
    setOpen(false);
    setSuccessMsg(msg);
  };
  // ----------------------Login------------------------
  // const handlePop = (msg) => {
  //   setOpenPop(true);
  //   setSuccessMsg(msg);
  // };

  // const handlePopClose = (msg) => {
  //   setOpenPop(false);
  //   setSuccessMsg(msg);
  // };
  // ----------------------Signup------------------------
  // const handleSinupPop = (msg) => {
  //   setOpenSignupPop(true);
  //   setSuccessMsg(msg);
  // };

  // const handlePopSignupClose = (msg) => {
  //   setOpenSignupPop(false);
  //   setSuccessMsg(msg);
  // };
  // ----------------------Signup------------------------
  function handleShow() {
    setMenu(!menu);
    setShowLogin(false);
    setShowSignup(false);
  }
  function handleLogin() {
    setShowLogin(true);
    setShowSignup(false);
    setMenu(false);
  }
  function handleSignup() {
    setShowSignup(true);
    setShowLogin(false);
    setMenu(false);
  }
  const handleContactClick = () => {
    setMenu(false);
  };

  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const decodedPathname = decodeURIComponent(parsedUrl.pathname);
    const categoryPath = decodedPathname.split("/").slice(1, 3).join("/");
  });

  return (
    <>
      {menu && (
        <MenuBar
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleContactClick={handleContactClick}
        />
      )}
      {showLogin && <Login handleSignup={handleSignup} />}
      {showSignup && <Signup handleLogin={handleLogin} />}

      {loading ? (
        <Preloader />
      ) : (
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    handleSearch={handleSearch}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    pagination={"none"}
                  />
                  <Main />
                  <Menu handleShow={handleShow} />
                  <Collection />
                  <Design />
                  <Product />
                  <Presents />
                  <Strategy />
                  <Podcast
                    span={"PRODUCT STORY"}
                    btnText={"Listen now!"}
                    src={"/assets/images/phone.webp"}
                  >
                    Get inspired by our Design Dreams podcast
                  </Podcast>
                  <Footer />
                </>
              }
            />
            <Route
              path="/collection"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Collection"}
                    obj={"Contact"}
                  />
                  <Items
                    link={"/"}
                    cardItem={AllCollection}
                    obj={collectionhead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Bedding & Bath"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Bedding & Bath"}
                  />
                  <Items
                    link={"/collection"}
                    cardItem={BeddingBath}
                    obj={BeddingBathhead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />
            <Route
              path={`/productdetails/:id1/:id`}
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Product Details"}
                  />
                  <ProductDetail
                    toggleCardHeight={toggleCardHeight}
                    isExpanded={isExpanded}
                  />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Furniture"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Furniture"}
                  />
                  <Items
                    link={"/Bedding & Bath"}
                    cardItem={Furniture}
                    obj={Furnitureobj}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Lighting"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Lighting"}
                  />
                  <Items
                    link={"/Furniture"}
                    cardItem={Lighting}
                    obj={LightingHead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Home Accessories"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Home Accessories"}
                  />
                  <Items
                    link={"/Lighting"}
                    cardItem={HomeAccessories}
                    obj={HomeAccessoriesHead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Wall & Floor"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Wall & Floor"}
                  />
                  <Items
                    link={"/Furniture"}
                    cardItem={WallFloor}
                    obj={WallFloorHead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Body & Beauty"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Body & Beauty"}
                  />
                  <Items
                    link={"/Furniture"}
                    cardItem={BodyBeauty}
                    obj={BodyBeautyHead}
                  />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/ordersummary"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Shopping bag"}
                  />
                  <OrderSummary />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                    toggleCardHeight={toggleCardHeight}
                    HideBuyWhenCartOpen={HideBuyWhenCartOpen}
                    Textcolor={"#000"}
                    backgroundColor={"#fff"}
                    leftHeader={"none"}
                    CenterHead={"start"}
                    pagination={"flex"}
                    paginationSection={"Contact"}
                  />
                  <Contact />
                  <Menu handleShow={handleShow} />
                  <Footer />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      )}
    </>
  );
}

export default App;
