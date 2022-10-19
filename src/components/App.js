import { useState, useEffect } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [isOpenCart, setIsOpenCart] = useState(JSON.parse(savedCart).length === 0 ? false : true);
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner />
      <div className="shopping">
        <Cart
          cart={cart}
          updateCart={updateCart}
          isOpenCart={isOpenCart}
          setIsOpenCart={setIsOpenCart}
        />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          setIsOpenCart={setIsOpenCart}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
