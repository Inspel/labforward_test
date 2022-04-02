import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'normalize.css';

import { initializeStream } from '~src/services/dataService';
import {
  selectDatasetsList,
  setNewDataset,
  addDataPoint,
} from '~src/reducers/dataSlice';
import { DatasetView } from '~src/components/DatasetView';

import * as styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const datasetsList = useSelector(selectDatasetsList);

  useEffect(() => {
    initializeStream(
      (datasetId, label) => dispatch(setNewDataset({ datasetId, label })),
      (datasetId, value) => {
        dispatch(addDataPoint({ datasetId, value }));
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      {datasetsList.map((dataset) => (
        <DatasetView key={dataset.id} datasetId={dataset.id} />
      ))}
    </div>
  );
};
