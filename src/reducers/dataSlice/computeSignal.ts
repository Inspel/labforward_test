import { RawDataItem, Signal } from '../../types';

export const computeSignal = (rawSignal: RawDataItem): Signal =>
  rawSignal > 5 ? 1 : 0;
