import React, { useState } from "react";
import "./styles.css";

const restaurentList = {
  sagargaire: [
    { name: "paneer kulcha", ratting: "4/5" },
    { name: "biryani", ratting: "4/5" }
  ],
  sharmavishnu: [
    { name: "paneer kulcha", ratting: "4.5/5" },
    { name: "biryani", ratting: "3/5" }
  ],
  bapukikutiya: [
    { name: "daal makhani", ratting: "4.5/5" },
    { name: "garlic naan", ratting: "4/5" }
  ]
};

// var foodWeKnow =Object.keys(restaurentList);

export default function App() {
  const [meaning, setMeaning] = useState("bapukikutiya");

  function listItemClickHandler(food) {
    setMeaning(food);
    // console.log("clicked" , food);
    // var meaning = restaurentList[food];
    // console.log(meaning);
    // setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>🥝Food</h1>

      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite restaurent.Select and get its ratting
      </p>

      <div>
        {Object.keys(restaurentList).map(function (food) {
          return (
            <button onClick={() => listItemClickHandler(food)}>{food}</button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "centre" }}>
        <ul>
          {restaurentList[meaning].map((foods) => {
            return (
              <li key={foods.name}>
                <div style={{ fontSize: "larger" }}>{foods.name}</div>
                <div style={{ fontSize: "smaller" }}>{foods.ratting}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
