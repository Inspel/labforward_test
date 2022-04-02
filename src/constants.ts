import { ChartOptions } from 'chart.js';

export const DEFAULT_CHART_OPTIONS: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      font: {
        size: 18,
      },
    },
  },
};
