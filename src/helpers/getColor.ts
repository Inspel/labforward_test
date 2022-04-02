import { COLORS } from '~src/constants';

let counter = 0;

export const getColor = () => {
  const currentColor = COLORS[counter];
  counter = counter < COLORS.length - 1 ? counter + 1 : 0;
  return currentColor;
};
