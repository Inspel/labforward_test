import React from 'react';
import { createRoot } from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { datasetsSlice } from './reducers/dataSlice';
import { App } from './components/App';

const store = configureStore({
  reducer: { datasets: datasetsSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
