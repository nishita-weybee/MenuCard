import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Items";
import Loader from "./Loader";

function MenuCard({ choice }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://bridgecoursereact.s3.amazonaws.com/fakeData.json`)
      .then((res) => {
        setData(res.data);
        if (choice === "Breakfast") {
          const snack = res.data.filter(
            (item) => item.category === "breakfast"
          );
          setData(snack);
        } else if (choice === "Shakes") {
          const dessert = res.data.filter((item) => item.category === "shakes");
          setData(dessert);
        } else {
          setData(res.data);
        }
        setTimeout(() => setLoading(false), 4000);
      });
  }, [choice]);
  return (
    <div className={loading === true ? "" : "menu"}>
      {loading ? (
        <Loader />
      ) : (
        data.map((i) => <Items foodItem={i} key={i.id} />)
      )}
    </div>
  );
}

export default MenuCard;
<div className="menu"></div>;
