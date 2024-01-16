// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      return [...state, newItem];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
