import React, { useState } from "react";
import InputTextComponent from "./UI/InputTextComponent";
import ButtonComponent from "./UI/ButtonComponent";
import { slice } from "../store/reducers/Slices";
import { useDispatch, useSelector } from "react-redux";
import { names } from "../names";

export default function SearchLineComponent({ language }) {
  const dispatch = useDispatch();
  const { setSearchReq } = slice.actions;
  const [reqValue, setReqValue] = useState("");
  const { searchReq } = useSelector((state) => state.slicesReducer);

  const handleInputChange = (e) => {
    dispatch(setSearchReq(e));
  };

  return (
    <div className="search-line">
      <InputTextComponent
        placeholder={searchReq}
        type="text"
        value={reqValue}
        onChange={(e) => {
          setReqValue(e.target.value);
        }}
      />

      <ButtonComponent
        className={"search-button"}
        onClick={(e) => {
          handleInputChange(reqValue);
        }}
      >
        {names[language].system.search}
      </ButtonComponent>
    </div>
  );
}
