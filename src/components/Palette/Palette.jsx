import React from "react";
import "./Palette.css";

export default function Palette({ paletteInfo }) {
  const PaletteColor = ({ colorHex, colorName, contrast }) => {
    return (
      <div className="palette-color" style={{backgroundColor:colorHex}}>
        <span className="color-name" style={{ color: contrast }}>
          {colorName}
        </span>
        <span className="color-hex" style={{ color: contrast, opacity:'0.5' }}>{colorHex}</span>
      </div>
    );
  };

  return (
    <div className="palette">
      {paletteInfo &&
        paletteInfo.map(({ hex, name, contrast }) => (
          <PaletteColor
            colorHex={hex.value}
            colorName={name.value}
            contrast={contrast.value}
          />
        ))}
    </div>
  );
}
