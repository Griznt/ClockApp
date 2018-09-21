export const checkTime = i => {
  return i < 10 ? `0${i}` : i;
};
export const generateArray = length => {
  const array = [];
  for (let i = 1; i <= length; i++) array.push(i);
  return array;
};
