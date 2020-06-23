import { HOURS_COUNT } from "./const";

export const checkTime = i => (i < 10 ? `0${i}` : i);
export const generateArray = length => {
  const array = [];
  for (let i = 1; i <= length; i++) array.push(i);
  return array;
};
export const prepareHours = hour =>
  hour > HOURS_COUNT ? hour - HOURS_COUNT : hour;
