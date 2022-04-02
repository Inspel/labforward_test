import { ChartOptions } from 'chart.js';

export const CHART_X_SIZE = 50;

export const DEFAULT_CHART_OPTIONS: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      font: {
        size: 16,
      },
    },
  },
};

export const COLORS = [
  { borderColor: 'rgb(255, 99, 132)', bgColor: 'rgb(229,135,158)' },
  { borderColor: 'rgb(99, 125, 255)', bgColor: 'rgb(134,151,239)' },
  { borderColor: 'rgb(12,98,29)', bgColor: 'rgb(86,128,94)' },
];
