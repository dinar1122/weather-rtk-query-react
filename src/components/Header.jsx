import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slice } from "../store/reducers/Slices";
import "../App.css";
import SwitchComponent from "./UI/SwitchComponent";
import SearchLineComponent from "./SearchLineComponent";
import DropdownComponent from "./UI/DropdownComponent";
import InputTextComponent from "./UI/InputTextComponent";
import { names } from "../names";

export default function Header() {
  const { unit, language } = useSelector((state) => state.slicesReducer);
  const dispatch = useDispatch();

  const unitValue = ["°C", "F"];

  const { setUnit, setLanguage, setlimitForecastDay } = slice.actions;
  const handleUnitToggle = (newUnit) => {
    dispatch(setUnit(newUnit));
  };
  const handleLangSelect = (lang) => {
    dispatch(setLanguage(lang));
  };
  const handleUpdateLimit = (value) => {
    dispatch(setlimitForecastDay(value));
  };

  const languages = ["en", "ru"];
  const values = ['c','f']
  return (
    <div className="header">
      <div className="header-child">
        <SearchLineComponent language={language} />
        <div className="header-right-side">
          <div className="setlimit-line">
            <InputTextComponent
              placeholder={names[language].system.limit}
              onChange={(e) => {
                handleUpdateLimit(e.target.value);
              }}
            />
          </div>
          <div className="dropdown-language">
            <DropdownComponent
              options={languages}
              defaultLanguage={language}
              onSelect={handleLangSelect}
            />
          </div>

          <SwitchComponent
            showedValue={unitValue}
            unit={unit}
            values={values}
            onToggle={(e) => handleUnitToggle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
