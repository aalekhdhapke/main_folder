import React from "react";
import "./button.css"; 

export default function Button({ onClick, label }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}
