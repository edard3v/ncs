export const format_date = (date?: string, options: Intl.DateTimeFormatOptions = {}) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    ...options,
  }).format(new Date(date));
};
