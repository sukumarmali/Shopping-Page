// item.js
import React from "react";
import "./item.css";

export default function Item({ item }) {
  return (
    <div className="item-container">
      <h3 className="item-title">{item.title}</h3>
      <img
        src={item.image}
        alt={item.title}
        className="item-image"
        role="img"
      />
      <p>
        <strong className="item-price">${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
