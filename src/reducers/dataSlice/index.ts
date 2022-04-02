import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~src';
import { RawDataItem, Signal } from '~src/types';
import { computeSignal } from '~src/helpers/computeSignal';

export type DatasetState = {
  id: string;
  rawData: RawDataItem[];
  signals: Signal[];
  label: string;
};
export type DatasetsSliceState = Record<string, DatasetState>;

export type AddDataPointPayload = { datasetId: string; value: number };
export type SetNewDatasetPayload = { datasetId: string; label: string };

export const datasetsSlice = createSlice({
  name: 'datasets',
  initialState: {} as DatasetsSliceState,
  reducers: {
    setNewDataset: (state, action: PayloadAction<SetNewDatasetPayload>) => {
      const { datasetId, label } = action.payload;
      if (state[datasetId]) {
        return;
      }
      state[datasetId] = {
        id: datasetId,
        label,
        rawData: [],
        signals: [],
      };
    },
    addDataPoint: (state, action: PayloadAction<AddDataPointPayload>) => {
      const { datasetId, value } = action.payload;
      if (!state[datasetId]) {
        return;
      }
      state[datasetId].rawData.push(value);
      state[datasetId].signals.push(computeSignal(value));
    },
  },
});

export const selectDatasets = (state: RootState) => state.datasets;

export const selectDatasetsList = createSelector(selectDatasets, (datasets) =>
  Object.keys(datasets).map((key) => datasets[key])
);

export const selectDataset = createSelector(
  [selectDatasets, (_state, datasetId: string) => datasetId],
  (datasets, datasetId) =>
    datasets[datasetId] || { rawData: [], signals: [], label: '', id: '' }
);

export const { addDataPoint, setNewDataset } = datasetsSlice.actions;
