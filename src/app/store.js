import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/likes/likes-slice";
import watchLaterReducer from "../features/watchLater/watchLater-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    watchLater: watchLaterReducer,
  },
});
