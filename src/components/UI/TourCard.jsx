import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TourCard = ({
  tourId,
  cost,
  image,
  title,
  description,
  button,
}) => {
  return (
    <div style={{ width: "500px" }}>
      <StyledTourCard>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{cost} сом </span>
        {button && (
          <div>
            {/* <button onClick={() => handleNavigate(tour.id)}>Подробнеее</button> */}
            {/* <button onClick={() => deleteTourHandler(tour.id)}>Удалить</button> */}
          </div>
        )}
        <Link to={"/"}>Вернуться обратно</Link>
      </StyledTourCard>
    </div>
  );
};

const StyledTourCard = styled.section`
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
  & div > button {
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
