import React from "react";
function Maptesting() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  return (
    <React.Fragment>
      <div>
        <h2>Healthy food</h2>
      </div>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Maptesting;
