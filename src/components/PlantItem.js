import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import not_found from "../assets/not_found.jpg";

function PlantItem({ plant, cart, updateCart, setIsOpenCart }) {
  const imgPlant = plant.cover ? plant.cover : not_found;
  return (
    <li className="plant-item">
      <img
        className="plant-item-cover"
        src={imgPlant}
        alt={"Plante " + plant.name}
      ></img>
      {plant.name}
      {plant.isBestSale && <div className="plant-sales">Soldes</div>}
      <CareScale careType="water" scaleValue={plant.water} />
      <CareScale careType="light" scaleValue={plant.light} />
      <p>Price : {plant.price}€</p>
      <button
        onClick={() => {
          addToCart(plant.name, plant.price, cart, updateCart);
          setIsOpenCart(true);
        }}
      >
        Ajouter
      </button>
    </li>
  );
}


function addToCart(name, price, cart, updateCart) {
  const currentPlantSaved = cart.find((plant) => plant.name === name)
  if (currentPlantSaved) {
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    )
    updateCart([
      ...cartFilteredCurrentPlant,
      { name, price, amount: currentPlantSaved.amount + 1 }
    ])
  } else {
    updateCart([...cart, { name, price, amount: 1 }])
  }
}

export default PlantItem;
