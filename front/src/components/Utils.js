export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && (Array.isArray(value) || Object.keys(value).length === 0)) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};