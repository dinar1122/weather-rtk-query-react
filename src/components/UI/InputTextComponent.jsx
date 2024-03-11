import React from "react";
import '../../App.css'
import './InputTextComponent.css';
export default function InputTextComponent({
  customStyle = '',
  placeholder = "placeholder",
  type = "text",
  value,
  onChange,
  id,
  ...rest
}) {
  return (
    <div className={` ${customStyle} default-input `}>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
