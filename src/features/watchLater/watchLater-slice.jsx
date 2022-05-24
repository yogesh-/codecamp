import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  watchLater: [],
  status: null,
};

let encodedToken = "";

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async (video) => {
    try {
      encodedToken = localStorage.getItem("token");
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      return response.data.watchlater;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromWatchLater = createAsyncThunk(
  "watchLater/removeFromWatchLater",
  async (videoId) => {
    try {
      encodedToken = localStorage.getItem("token");
      const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.watchlater;
    } catch (error) {
      console.log(error);
    }
  }
);

const WatchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  extraReducers: {
    [addToWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [addToWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      console.log("from watchlater slice", state.watchLater);
      state.status = "success";
    },
    [addToWatchLater.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.status = "success";
    },
    [removeFromWatchLater.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default WatchLaterSlice.reducer;
