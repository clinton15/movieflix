import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMES } from "./constants";
const gptSlice = createSlice({
  name: SLICE_NAMES.gpt,
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
