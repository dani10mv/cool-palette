import React from "react";
import "./ColorSelector.css";
export default function ColorSelector({mainColor,setMainColor}) {

  const updateColor = (event) => {
      setMainColor(event.target.value);
      console.log("Searching...", event.target.value);
      // your API call logic goes here
  }
  
  const debounce = (callback, waitTime) => {
      let timer;
      return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
              callback(...args);
          }, waitTime);
      };
  }
  
  const debounceHandler = debounce(updateColor, 300);


  return (
    <div className="color-selector">
      <div className="color-info">
        <span className="color-name">Green</span>
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
