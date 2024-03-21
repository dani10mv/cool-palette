import { useState, useEffect } from "react";
import "./App.css";
import { ColorSelector } from "@/components/ColorSelector";
import { Palette } from "@/components/Palette";
import { getColorInfo } from "@/services/colors";
import { getPalette } from "@/services/palette";

function App() {
  const [mainColor, setMainColor] = useState("#C0E294");
  const [mainColorName, setMainColorName] = useState("Yellow Green");

  const [palette, setPalette] = useState(null);

  const getAllPaletteInfo = async (paletteColors) => {
    return await Promise.all(
      paletteColors.map((colorHex) => getColorInfo(colorHex))
    );
  };

  const handleColorChange = async () => {
    const paletteColors = await getPalette(mainColor);
    const paletteInfo = await getAllPaletteInfo(paletteColors);
    setMainColorName(
      paletteInfo.find((colorInfo) => colorInfo.hex.value === mainColor).name
        .value
    );
    setPalette(paletteInfo);
  };

  useEffect(() => {
    handleColorChange();
    return;
  }, [mainColor]);

  return (
    <main>
      <h1>THE COOL PALETTE.</h1>
      <ColorSelector
        colorName={mainColorName}
        mainColor={mainColor}
        setMainColor={setMainColor}
      />
      <Palette paletteInfo={palette} />
    </main>
  );
}

export default App;
