import { useState, useEffect } from "react";
import { PLANT_LIST } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart, setIsOpenCart }) {
  const [filterCategories, updateCategoryFilter] = useState(
    "-- Toutes les plantes --"
  );

  return (
    <div className="shopping-list">
      <div className="plant-list">
        <h2>Catégories de plantes</h2>
        <Categories
          filterCategories={filterCategories}
          updateCategoryFilter={updateCategoryFilter}
        />
        <button
          onClick={() => updateCategoryFilter("-- Toutes les plantes --")}
        >
          Réinitialiser le filtre
        </button>
      </div>
      <div className="category-list">
        <h2>Listes des plantes</h2>
        <PlantNameList
          cart={cart}
          updateCart={updateCart}
          setIsOpenCart={setIsOpenCart}
          filterCategories={filterCategories}
        />
      </div>
    </div>
  );
}

function PlantNameList({ cart, updateCart, setIsOpenCart, filterCategories }) {
  return (
    <ul>
      {PLANT_LIST.map((plant) => {
        if (
          filterCategories === plant.category ||
          filterCategories === "-- Toutes les plantes --"
        ) {
          return (
            <PlantItem
              key={`${plant.id}`}
              plant={plant}
              scaleValue={plant.water}
              cart={cart}
              updateCart={updateCart}
              setIsOpenCart={setIsOpenCart}
            />
          );
        }
        return null;
      })}
    </ul>
  );
}

export default ShoppingList;
