import asyncFetch from "@/utils/asyncFetch";

export const getPalette = async (colorHex) => {
  return await asyncFetch(
    import.meta.env.VITE_PALETTE_API + colorHex.replace("#", "")
  );
};
