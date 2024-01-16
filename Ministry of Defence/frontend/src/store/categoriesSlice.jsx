// src/store/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../generalComponents/consts';
import axios from 'axios';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = {
        id: state.length + 1, // Generate a unique ID (replace this logic as needed)
        name: action.payload,
      };
      return [...state, newCategory];
    },
    setCategories: (state, action) => {
      return action.payload; // Set the entire array of categories received from the server
    },
  },
});

export const { addCategory, setCategories } = categoriesSlice.actions;

// Thunk action to fetch categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    console.log('Response from API:', response.data);
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};


export default categoriesSlice.reducer;
