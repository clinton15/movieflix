import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import { combineReducers } from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  gpt: gptReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = {};
  }
  return combinedReducer(state, action);
};

const appStore = configureStore({
  reducer: {
    rootReducer
   }
});

export default appStore;
