import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    lang: "en",
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
