import { createSlice } from "@reduxjs/toolkit";
import { getAllTour, getSingleTourRequest } from "../thunks/tourThunk";

const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    error: "",
    loading: false,
    singleTour: [],
  },
  reducers: {
    // addTour(state, action) {
    //   state.tours.push(action.payload);
    // },
    // deleteTour(state, action) {
    //   state.tours = state.tours.filter((tour) => tour.id !== action.payload);
    // },
  },
  //            строитель
  extraReducers: (builder) => {
    builder
      .addCase(getAllTour.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(getAllTour.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleTourRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.singleTour = [action.payload];
      });
  },
});

export const { addTour, deleteTour } = tourSlice.actions;

export const tourReducer = tourSlice.reducer;
