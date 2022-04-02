import { RawDataItem } from '~src/types';

const datasets = [
  {
    id: 'dataset1',
    label: 'A',
    data: [
      1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 3, 1, 2, 0, 8, 9, 2, 0, 3,
      0, 2, 1, 2, 3, 8, 10, 2, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2,
      1,
    ],
  },
  {
    id: 'dataset2',
    label: 'B',
    data: [
      0, 2, 1, 2, 3, 10, 12, 1, 1, 2, 3, 0, 1, 2, 1, 2, 7, 7, 9, 1, 2, 0, 1, 2,
      1, 2, 1, 3, 0, 2, 3, 1, 1, 2, 3, 10, 9, 12, 0, 2, 3, 1, 2, 0, 1, 7, 11, 0,
      1, 2,
    ],
  },
  {
    id: 'dataset3',
    label: 'C',
    data: [
      2, 1, 3, 0, 2, 2, 9, 7, 2, 3, 1, 2, 9, 8, 2, 3, 1, 2, 0, 1, 2, 3, 0, 10,
      9, 1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 1, 14, 10, 0, 1, 1, 2,
      0, 3,
    ],
  },
];

export const initializeStream = (
  initDataset: (datasetId: string, label: string) => void,
  tickHandler: (datasetId: string, value: RawDataItem) => void
) => {
  datasets.forEach((dataset) => {
    initDataset(dataset.id, dataset.label);

    let index = 0;
    const intervalId = setInterval(() => {
      tickHandler(dataset.id, dataset.data[index]);
      index++;
      if (index >= dataset.data.length) {
        clearInterval(intervalId);
      }
    }, 1000);
  });
};
