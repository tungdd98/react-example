import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/user.api";
import { UserDef } from "../types/user.types";

interface UserState {
  users: UserDef[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserState = {
  users: null,
  isLoading: false,
  isError: false,
};

export const getUserList = createAsyncThunk<UserDef[]>(
  "user/getUserList",
  async () => {
    const response = await userApi.getUserListApi();

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUserList.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const userReducer = userSlice.reducer;
