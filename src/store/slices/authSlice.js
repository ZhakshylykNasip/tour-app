import { createSlice } from "@reduxjs/toolkit";
import { signUpRequest } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    registrationStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.pending, (state) => {
        state.registrationStatus = null;
      })
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.registrationStatus = null;
        state.role = action.payload.role;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.registrationStatus = action.payload;
      });
  },
});