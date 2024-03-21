import React from "react";
import "./ColorSelector.css";

const debounce = (callback, waitTime) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, waitTime);
    };
}

export default function ColorSelector({colorName="",mainColor,setMainColor}) {

  const updateColor = (event) => {
      setMainColor(event.target.value.toUpperCase());
  }
  const debounceHandler = debounce(updateColor, 300); 


  return (
    <div className="color-selector">
      <div className="color-info">
        <span className="color-name">{colorName}</span>
        <span className="color-hex">{mainColor}</span>
      </div>
      <input
        type="color"
        className="color-preview"
        defaultValue={mainColor}
        onChange={debounceHandler}
      ></input>
    </div>
  );
}
