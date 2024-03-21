import asyncFetch from "@/utils/asyncFetch";
const COLORS_API_URL = "https://www.thecolorapi.com/id?hex=";

export const getColorInfo = async (colorHex) => {
  return await asyncFetch(COLORS_API_URL + colorHex.replace("#",""));
};
