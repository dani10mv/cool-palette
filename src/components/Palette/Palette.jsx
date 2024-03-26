import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./Palette.css";
import { usePalette } from "@/store/palette";

export default function Palette() {
  const PaletteColor = ({ index }) => {
    const divRef = useRef();
    const [color, setColor] = useState(null);
      
      const cambiarColor = (color) => {
        const paletteColor = divRef.current;
        
        paletteColor.animate(
          {
            backgroundColor: color.hex,
        },
        {
          delay: index * 0.2 * 200,
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
        );
        setColor(color)
      };
      const subs = usePalette.subscribe((state) => cambiarColor(state.palette[index]));

    return (
      <div ref={divRef} className="palette-color">
        {color && (
          <>
            <span className="color-name" style={{ color: color.contrast }}>
              {color.name}
            </span>
            <span
              className="color-hex"
              style={{ color: color.contrast, opacity: "0.5" }}
            >
              {color.hex}
            </span>
          </>
        )}
      </div>
    );
  };

  const createColors = () => {
    let listOfColors = [];
    console.log("creo colores");
    for (let i = 0; i < 5; i++) {
      listOfColors.push(
        <PaletteColor
          key={i}
          index={i}
        />
      );
    }
    return listOfColors;
  };

  return <div className="palette">{createColors()}</div>;
}
