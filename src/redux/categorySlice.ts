import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types';

export type CategoryState = {
  categories: Category[];
  initialized: boolean;
};

const initialState: CategoryState = {
  categories: [],
  initialized: false,
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCategories: (
      state: CategoryState,
      action: PayloadAction<Category[]>
    ) => {
      state.categories = action.payload;
      state.initialized = true;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
