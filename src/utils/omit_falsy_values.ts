export const omit_falsy_values = <T>(obj: object) => {
  const result: any = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      result[key] = value;
    }
  }

  return result as T;
};
