type Class = string | undefined | null | false;
type ClassNames = Class[];

export const cls = (class_names: ClassNames) => {
  const valid_classes = class_names.filter(Boolean);
  const final_class = valid_classes.join(" ");
  return final_class;
};
