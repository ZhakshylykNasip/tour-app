import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTourRequest, getAllTour } from "../store/thunks/tourThunk";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";

export const TourList = () => {
  const { tours, loading, error } = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTourHandler = (tourId) => {
    dispatch(deleteTourRequest(tourId));
  };

  useEffect(() => {
    dispatch(getAllTour());
  }, []);

  const handleNavigate = (selectedId) => {
    navigate(`tourInfo/${selectedId}`);
  };


  return (
    <StyledTourList>
      <hr />
      {loading === true && <StyledLoader color="black" />}
      {error !== "" && <h1 style={{ color: "red" }}>Error</h1>}
      {tours?.map((tour) => (
        <TourCard key={tour.id}>
          <img src={tour.image} alt={tour.title} />
          <h3>{tour.title}</h3>
          <p>{tour.description}</p>
          <span>{tour.cost} сом </span>

          <button onClick={() => handleNavigate(tour.id)}>Подробнеее</button>
          <button onClick={() => deleteTourHandler(tour.id)}>Удалить</button>
        </TourCard>
      ))}
    </StyledTourList>
  );
};

const StyledLoader = styled(PacmanLoader)`
  /* text-align: center; */
  position: absolute;
  left: 50%;
  top: 50%;
`;

const StyledTourList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  /* background-color: #fff; */
  border-radius: 5px;
  & > h3 {
    text-align: center;
  }
`;

const TourCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 500px;
  max-width: 70%;

  margin: auto;

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  &h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > button {
    width: 100%;
    padding: 20px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid #333;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
    }
  }
`;
