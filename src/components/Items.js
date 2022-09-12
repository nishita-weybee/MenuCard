import React from "react";

function Items({ foodItem }) {
  return (
    <div className="iems">
      <div className="image">
        <img src={foodItem.img} alt="food-items" className="food-item-image" />
      </div>
      <div className="details">
        <h2>{foodItem.title} </h2>
        <div>
          <p className="desc">{foodItem.desc} </p>
        </div>

        <div>
          <p className="price">${foodItem.price} </p>
        </div>
      </div>
    </div>
  );
}

export default Items;
