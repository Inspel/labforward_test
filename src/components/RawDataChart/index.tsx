import React, { FC, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartDataset,
  ChartOptions,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import range from 'lodash.range';
import merge from 'lodash.merge';
import cn from 'classnames';

import { RawDataItem } from '~src/types';
import { CHART_X_SIZE, DEFAULT_CHART_OPTIONS } from '~src/constants';

import * as styles from './RawDataChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const chartOptions: ChartOptions<'line'> = {
  plugins: {
    title: {
      text: 'Raw data',
    },
  },
  scales: {
    y: {
      max: 15,
      min: 0,
    },
  },
};

type Props = {
  className?: string;
  dataset: ChartDataset<'line', RawDataItem[]>;
};

export const RawDataChart: FC<Props> = ({ dataset, className }) => {
  const currentOptions = useMemo(
    () => merge(chartOptions, DEFAULT_CHART_OPTIONS),
    []
  );
  return (
    <div className={cn(styles.container, className)}>
      <Line
        data={{
          labels: range(1, CHART_X_SIZE + 1),
          datasets: [{ ...dataset }],
        }}
        options={currentOptions}
      />
    </div>
  );
};
