import React, { useState } from 'react';
import './DropdownComponent.css'; 
import { useSelector } from 'react-redux';

const DropdownComponent = ({ options, onSelect, defaultLanguage }) => {
    
  const [selectedOption, setSelectedOption] = useState(defaultLanguage);
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-selected">{selectedOption || 'Select an option'}</div>
      <div className="dropdown-list">
        {options.map((option, index) => (
          <div key={index} className="dropdown-item" onClick={() => handleSelect(option)}>
            <span className="custom-radio"></span>
            <span className="label-value">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownComponent;