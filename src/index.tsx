import React from 'react';
import { createRoot } from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { dataStreamSlice } from './reducers/dataSlice';
import { App } from './components/App';

const store = configureStore({ reducer: dataStreamSlice.reducer });

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
