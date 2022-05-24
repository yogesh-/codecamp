import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "../features/likes/likes-slice";
import watchLaterReducer from "../features/watchLater/watchLater-slice";
import historyReducer from "../features/history/history-slice";

export const store = configureStore({
  reducer: {
    likes: likesReducer,
    watchLater: watchLaterReducer,
    historyVideos: historyReducer,
  },
});
