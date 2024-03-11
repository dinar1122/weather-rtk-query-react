import React from "react";
import "./SwitchComponent.css";

const SwitchComponent = ({ onToggle, unit, values, showedValue }) => {
  return (
    <div className="switch-container">
      <label>
        <input
          type="radio"
          value={values[0]}
          checked={unit === values[0]}
          onChange={onToggle}
        />
        <span className="custom-radio"></span>
        <span className="label-value">{showedValue[0]}</span>
      </label>
      <label>
        <input
          type="radio"
          value={values[1]}
          checked={unit === values[1]}
          onChange={onToggle}
        />
        <span className="custom-radio"></span>
        <span className="label-value">{showedValue[1]}</span>
      </label>
    </div>
  );
};

export default SwitchComponent;
