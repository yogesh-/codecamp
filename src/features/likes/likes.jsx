import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  likes: [],
  status: null,
};

let encodedToken = "abcnvdjnv3r34rndnv";

export const addToLikes = createAsyncThunk(
  "likes/addToLikes",
  async (video) => {
    try {
      const res = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log("25:response", res.data.likes);
      return res.data.likes;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromLikes = createAsyncThunk(
  "likes/removeFromLikes",
  async (videoId) => {
    try {
      const res = await axios.delete(`/api/user/likes/${videoId}`);
      return res.data.likes;
    } catch (error) {
      console.log(error);
    }
  }
);

const likeSlice = createSlice({
  name: "likes",
  initialState,
  extraReducers: {
    [addToLikes.pending]: (state) => {
      state.status = "loading";
    },
    [addToLikes.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.status = "success";
    },
    [addToLikes.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromLikes.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromLikes.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.status = "success";
    },
    [removeFromLikes.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default likeSlice.reducer;
