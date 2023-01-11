import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
const state = store.getState();

export type RootState = typeof state;

export default store;
