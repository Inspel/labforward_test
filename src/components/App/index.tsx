import React, { useEffect } from 'react';
import { initializeStream } from '../../services/dataService';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLastRawData,
  selectSignalsLast,
  updateRawData,
} from '../../reducers/dataSlice/dataSlice';

import { RawDataChart } from '../RawDataChart';
import { SignalsDataChart } from '../SignalsChart';

import * as styles from './index.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const rawData = useSelector((state) => selectLastRawData(state));

  const signalsData = useSelector((state) => selectSignalsLast(state));

  useEffect(() => {
    initializeStream((value) => dispatch(updateRawData(value)));
  }, []);

  return (
    <div className={styles.wrapper}>
      <RawDataChart
        className={styles.chart}
        dataset={{
          data: rawData,
          label: 'Dataset 1',
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }}
      />
      <SignalsDataChart
        className={styles.chart}
        dataset={{
          data: signalsData,
          label: 'Dataset 1',
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }}
      />
    </div>
  );
};
