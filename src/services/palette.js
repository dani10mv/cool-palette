import asyncFetch from "@/utils/asyncFetch";
const PALETTE_API_URL = "http://palett.es/API/v1/palette/from/";

export const getPalette = async (colorHex) => {
  return await asyncFetch(PALETTE_API_URL + colorHex);
};
