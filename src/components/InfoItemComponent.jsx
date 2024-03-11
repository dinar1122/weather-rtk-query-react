import React from "react";

export default function InfoComponent({ title, value, unit }) {
  return (
    <div className="info-item">
      <div className="info-item-child">
        <div className="top">
          {title}
          {unit}
        </div>
        <div className="middle">
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}
