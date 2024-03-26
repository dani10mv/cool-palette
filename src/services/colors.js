import asyncFetch from "@/utils/asyncFetch";

export const getColorInfo = async (colorHex) => {
  return await asyncFetch(
    import.meta.env.VITE_COLOR_API + colorHex.replace("#", "")
  );
};
