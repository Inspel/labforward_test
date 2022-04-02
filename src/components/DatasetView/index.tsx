import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { DatasetState, selectDataset } from '~src/reducers/dataSlice';
import { RawDataChart } from '~src/components/RawDataChart';
import { SignalsDataChart } from '~src/components/SignalsChart';

import * as styles from './DatasetView.module.css';
import { RootState } from '~src';
import { getColor } from '~src/helpers/getColor';
import { CHART_X_SIZE } from '~src/constants';

type Props = {
  datasetId: string;
};

export const DatasetView: FC<Props> = ({ datasetId }) => {
  const { rawData, signals, label } = useSelector<RootState, DatasetState>(
    (state) => selectDataset(state, datasetId)
  );

  const rawDataView = rawData.slice(
    rawData.length > CHART_X_SIZE ? rawData.length - CHART_X_SIZE : 0
  );

  const signalDataView = signals.slice(
    signals.length > CHART_X_SIZE ? signals.length - CHART_X_SIZE : 0
  );

  const color = getColor();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{`Dataset ${label}`}</h2>
      <div className={styles.container}>
        <RawDataChart
          className={styles.chart}
          dataset={{
            data: rawDataView,
            label: label,
            borderColor: color.borderColor,
          }}
        />
        <SignalsDataChart
          className={styles.chart}
          dataset={{
            data: signalDataView,
            label: label,
            borderColor: color.borderColor,
            backgroundColor: color.bgColor,
          }}
        />
      </div>
    </div>
  );
};
