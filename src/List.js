// list.js
import React from "react";
import "./list.css";
import Item from "./components/Item";
import { data } from "./data";

export default function List() {
  return (
    <>
      <h3 className="list-title">Items Listed for Sale</h3>
      <div className="list-container">
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
