import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      console.log("data: ", data.data);

      if (data.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);

      if (data.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// войти = login
// регистп = sing up
