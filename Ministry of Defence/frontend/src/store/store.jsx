// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';

// import categoriesReducer from './categoriesSlice';

// const store = configureStore({
//   reducer: {
//     categories: categoriesReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;
// src/store/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'; // Import Redux Thunk middleware
import categoriesReducer from './categoriesSlice';
import cartReducer from './cartSlice'; // Import the new cartSlice



const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer, // Include the cart reducer in the store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;


