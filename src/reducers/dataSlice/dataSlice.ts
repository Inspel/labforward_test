import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RawDataItem, Signal } from '../../types';
import { computeSignal } from './computeSignal';

type DataStreamState = { rawData: RawDataItem[]; signals: Signal[] };

export const CHART_X_SIZE = 50;

export const dataStreamSlice = createSlice({
  name: 'dataStream',
  initialState: {
    rawData: [],
    signals: [],
  } as DataStreamState,
  reducers: {
    updateRawData: (state, action: PayloadAction<number>) => {
      state.rawData.push(action.payload);
      state.signals.push(computeSignal(action.payload));
    },
  },
});

export const selectRawData = (state) => state.rawData;
export const selectLastRawData = createSelector(
  selectRawData,
  (state, length = CHART_X_SIZE) => length,
  (rawData, length) =>
    rawData.slice(rawData.length > length ? rawData.length - length : 0)
);

export const selectSignals = (state) => state.signals;
export const selectSignalsLast = createSelector(
  selectSignals,
  (state, length = CHART_X_SIZE) => length,
  (rawData, length) =>
    rawData.slice(rawData.length > length ? rawData.length - length : 0)
);

export const { updateRawData } = dataStreamSlice.actions;
