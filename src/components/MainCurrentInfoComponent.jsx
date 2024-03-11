import React from "react";

export default function MainCurrentInfoComponent({
  city,
  region,
  value,
  condition,
  conditionImg,
  mintemp,
  maxtemp,
  minValueName,
  maxValueName,
  unitSymb,
}) {
  return (
    <div className="main-current-info-container">
      <div className="top-main-info">
        <div>{city}</div> <div>{region}</div>
      </div>
      <div className="middle-main-info">
        <div className="middle-child">
          {value}
          {unitSymb}
        </div>
        <img className="img-main-info" src={conditionImg} alt={condition} />
        <div className="middle-child">{condition}</div>
      </div>
      <div className="bottom-main-info">
        <div>
          {minValueName}({unitSymb}): {mintemp}
        </div>
        <div>
          {maxValueName}({unitSymb}): {maxtemp}
        </div>
      </div>
    </div>
  );
}
