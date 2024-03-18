import React from "react";
import "./ColorSelector.css";
export default function ColorSelector() {
  return (
    <div className="color-selector">
      <div className="color-info">
        <span className="color-name">Green</span>
        <span className="color-hex">#C0E294</span>
      </div>
      <div className="color-preview"></div>
    </div>
  );
}
