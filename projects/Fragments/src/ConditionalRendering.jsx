import React from "react";
function ConditionalRendering() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  return (
    <React.Fragment>
      <h2>Healthy food</h2>
      {foodItems.length===0 ? <h3>I am still hungry</h3>:null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ConditionalRendering;
