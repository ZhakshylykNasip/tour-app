import React from "react";
import { TourForm } from "../components/TourForm";
import { TourList } from "../components/TourList";

export const MainPage = () => {
  return (
    <>
      <TourForm />
      <TourList />
    </>
  );
};
