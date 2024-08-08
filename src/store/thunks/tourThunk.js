import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getAllTour = createAsyncThunk(
  "tours/getAllTour",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/tours");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postTour = createAsyncThunk(
  "tours/postTour",
  async (tourData, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post("/tours", tourData);
      dispatch(getAllTour());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTourRequest = createAsyncThunk(
  "tours/deleteTour",
  async (tourId, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete("/tours" + "/" + tourId);
      dispatch(getAllTour());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSingleTourRequest = createAsyncThunk(
  "tours/deleteTour",
  async (tourId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/tours" + "/" + tourId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
