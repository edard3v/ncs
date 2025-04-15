export const capitalize_first_word = (txt: string): string => {
  if (!txt) return "";

  return txt.charAt(0).toUpperCase() + txt.slice(1);
};
