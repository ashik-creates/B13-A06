import "./App.css";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Statas/Stats";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs/Tabs";
import Products from "./components/Products/Products";

const productData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const dataPromise = productData();

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tabs></Tabs>
      <Products dataPromise={dataPromise}></Products>
    </>
  );
}

export default App;
