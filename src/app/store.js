import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/likes/likes";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});
