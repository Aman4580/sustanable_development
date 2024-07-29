import React, { useState } from "react";
import "./Crop.css";
import demoData from "../Demodata/demo";
import FoodCategory from "../FoodCategory/FoodCategory";

/**
 * Food component to find foods according to category
 */
const Food = () => {
  const data = demoData;
  const [foods, setFoods] = useState(data);
  const [category, setCategory] = useState("Grains");
  const selectCategory = foods.filter((cat) => cat.catagories === category);

  return (
    <div className="container food-header py-5">
      {/* Navigation to select food cards according to category */}
      <nav style={{ backgroundColor: "rgb(203 203 203)", borderRadius: '5px', width: "auto" }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '10px' }}>
          <li>
            <a
              onClick={() => setCategory("Grains")}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              Grains
            </a>
          </li>
          <li>
            <a
              onClick={() => setCategory("Nuts")}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              Nuts
            </a>
          </li>
          <li>
            <a
              onClick={() => setCategory("Oil")}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              Oil
            </a>
          </li>
        </ul>
      </nav>
      <div className="container py-5">
        <div className="row">
          {selectCategory.map((item) => (
            <div className="col-md-4 py-3" key={item.id}>
              <FoodCategory items={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
