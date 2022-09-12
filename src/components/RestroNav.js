import React from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";

function RestroNav() {
  const [choice, setChoice] = useState("All");
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <button
              onClick={(e) => setChoice(e.target.value)}
              className={choice === "All" ? "active-btn" : ""}
              value="All"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={(e) => setChoice(e.target.value)}
              className={choice === "Shakes" ? "active-btn" : ""}
              value="Shakes"
            >
              Shakes
            </button>
          </li>
          <li>
            <button
              onClick={(e) => setChoice(e.target.value)}
              className={choice === "Breakfast" ? "active-btn" : ""}
              value="Breakfast"
            >
              Breakfast
            </button>
          </li>
        </ul>
      </div>
      {choice ? <MenuCard choice={choice} /> : ""}
    </div>
  );
}

export default RestroNav;
