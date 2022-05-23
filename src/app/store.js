import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/likes/likes-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});
