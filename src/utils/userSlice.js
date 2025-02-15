import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAMES, DEFAULT_LANGUAGE } from "./constants";
const userSlice = createSlice({
  name: SLICE_NAMES.user,
  initialState: {
    user: null,
    lang: DEFAULT_LANGUAGE,
  },
  reducers: {
    addUser: (state, action) => {
      return (state = { ...state, user: action.payload });
    },
    removeUser: (state, action) => {
      return (state = { ...state, user: null });
    },
    changeLang: (state, action) => {
      return (state = { ...state, lang: action.payload });
    },
  },
});

export const { addUser, removeUser, changeLang } = userSlice.actions;

export default userSlice.reducer;
