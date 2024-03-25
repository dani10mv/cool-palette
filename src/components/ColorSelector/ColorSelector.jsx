import React, { useEffect } from "react";
import "./ColorSelector.css";
import { usePalette } from "@/store/palette";

const debounce = (callback, waitTime) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, waitTime);
  };
};

export default function ColorSelector({ colorName = "Yellow Green" }) {
  const { updateWithColor, mainColor, mainColorName } = usePalette();

  const updateColor = (event) => {
    const colorHex = event.target.value.toUpperCase();
    updateWithColor(colorHex);
  };
  const debounceHandler = debounce(updateColor, 300);

  useEffect(() => {
    updateWithColor(mainColor);
  }, []);

  return (
    <div className="color-selector">
      <div className="color-info">
        <span className="color-name">{mainColorName || colorName}</span>
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
