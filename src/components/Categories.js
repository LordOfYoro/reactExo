import { PLANT_LIST } from "../datas/plantList";

function Categories({ filterCategories, updateCategoryFilter }) {
  const categories = PLANT_LIST.reduce((previousValue, plant) => {
    const category = plant.category;
    if (previousValue.includes(category)) {
      return previousValue;
    } else {
      return previousValue.concat(category);
    }
  }, []);

  return (
    <select onChange={(e) => updateCategoryFilter(e.target.value)} value = {filterCategories}>
      <option value="-- Toutes les plantes --">--Toutes les plantes--</option>
      {categories.map((category, index) => (
        <option key={`${category}-${index}`} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Categories;
