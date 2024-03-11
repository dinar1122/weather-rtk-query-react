import React from "react";
import "./ButtonComponent.css";
import "../../App.css";

export default function ButtonComponent({ children, className, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={`default-button ${className}`}>
        {children}
      </button>
    </div>
  );
}
