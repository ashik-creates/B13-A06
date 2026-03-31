import "./App.css";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Statas/Stats";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs/Tabs";
import Products from "./components/Products/Products";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import Transform from "./components/Transform/Transform";
import Footer from "./components/Footer/Footer";

const productData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const dataPromise = productData();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} cart={cart}></Tabs>
      {activeTab === "products" && (
        <Products dataPromise={dataPromise} cart={cart} setCart={setCart}></Products>
      )}
      {activeTab === "cart" && <Cart cart={cart} setCart={setCart}></Cart>}
      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App;
