import React, { useState } from "react";
import "./Crop.css";
import demoData from "../Demodata/demo";
import FoodCategory from "../FoodCategory/FoodCategory";

/**
 * Food component to find foods according to category
 */
const Food = () => {
  const data = demoData;
  const [foods] = useState(data);
  const [category, setCategory] = useState("Grains");
  const selectCategory = foods.filter((cat) => cat.catagories === category);

  return (
    <div className="container food-header py-5">
      {/* Navigation to select food cards according to category */}
      <nav className="food-nav">
        <ul className="food-nav-list">
          {["Grains", "Nuts", "Oil"].map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setCategory(cat)}
                className={`food-nav-button ${category === cat ? 'active' : ''}`}
                aria-label={`Select ${cat} category`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container py-5">
        <div className="row">
          {selectCategory.length > 0 ? (
            selectCategory.map((item) => (
              <div className="col-md-4 py-3" key={item.id}>
                <FoodCategory items={item} />
              </div>
            ))
          ) : (
            <p>No items found for the selected category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;
