// redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
};

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    changeColor: (state,action) => {
      state.value = state.value + " " + action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
