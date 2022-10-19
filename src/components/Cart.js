import { useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart, isOpenCart, setIsOpenCart }) {
  const WORDING_BY_DEFAULT = "Votre panier est vide";
  
  const total = cart.reduce(
    (acc, plant) => acc + plant.amount * plant.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ : ${total}€ d'achats`;
  }, [total]);

  if (isOpenCart) {
    const totalAmount = cart.reduce((acc, plant) => acc + plant.amount, 0);
    
    return (
      <div className="cart-content">
        <h2>Panier</h2>

        {cart.map(({ name, price, amount }, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
        ))}

        <h3>
          Total : {total}€ ({totalAmount} Articles)
        </h3>
        <button
          className="cart-toggle-button"
          onClick={() => {
            updateCart([]);
            setIsOpenCart(false);
          }}
        >
          Vider le panier
        </button>
      </div>
    );
  } else {
    return (
      <div className="cart-content">
        <h2>Panier</h2>
        <p>{WORDING_BY_DEFAULT}</p>
        <button
          className="cart-toggle-button"
          onClick={() => setIsOpenCart(true)}
        >
          Ouvrir le Panier
        </button>
      </div>
    );
  }
}

export default Cart;
