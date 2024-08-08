import { TourCard } from "../components/UI/TourCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTourRequest } from "../store/thunks/tourThunk";
// import { TourCard } from "../components/UI/TourCard";

export const TourInfo = () => {
  const { tourId } = useParams();
  const dispatch = useDispatch();
  const { singleTour } = useSelector((state) => state.tours);
  console.log("singleTour: ", singleTour);

  useEffect(() => {
    dispatch(getSingleTourRequest(tourId));
  }, [tourId]);

  return (
    <div>
      {singleTour?.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </div>
  );
};
