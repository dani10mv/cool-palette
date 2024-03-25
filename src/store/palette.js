import { create } from "zustand";
import { getPalette } from "@/services/palette";
import { getColorInfo } from "@/services/colors";

const getAllPaletteInfo = async (paletteColors) => {
  return await Promise.all(
    paletteColors.map((colorHex) => getColorInfo(colorHex))
  );
};
//   const [mainColor, setMainColor] = useState("#C0E294");

const createNewPalette = async (colorHex) => {
  const paletteColors = await getPalette(colorHex);
  const paletteInfo = await getAllPaletteInfo(paletteColors);
  return paletteInfo.map(colorInfo => ({
    hex : colorInfo.hex.value,
    name : colorInfo.name.value,
    contrast : colorInfo.contrast.value}));
};

export const usePalette = create((set) => ({
  palette: [],
  mainColorName: "",
  mainColor: "#C0E294",
  updateWithColor: async (colorHex) => {
    const newPalette = await createNewPalette(colorHex);
    const colorName = newPalette.find((color) => color.hex === colorHex).name;
    set({ palette: newPalette, mainColorName: colorName });
  },
}));
