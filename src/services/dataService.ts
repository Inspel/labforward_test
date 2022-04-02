import { RawDataItem } from '../types';

export const data = [
  1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 3, 1, 2, 0, 8, 9, 2, 0, 3, 0,
  2, 1, 2, 3, 8, 10, 2, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2, 1,
];

export const initializeStream = (tickHandler: (value: RawDataItem) => void) => {
  let index = 0;
  const intervalId = setInterval(() => {
    tickHandler(data[index]);
    index++;
    if (index >= data.length) {
      clearInterval(intervalId);
    }
  }, 1000);
};
