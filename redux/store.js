// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import colorReducer from "./colors/colorsSlice"
const store = configureStore({
  // Define your reducers here
  reducer: {
    // You can add your reducers here
    colors: colorReducer
  },
});

export default store;
