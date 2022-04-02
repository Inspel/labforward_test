import { RawDataItem, Signal } from '~src/types';

export const computeSignal = (rawSignal: RawDataItem): Signal =>
  rawSignal > 5 ? 1 : 0;
