import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postTour } from "../store/thunks/tourThunk";
// import { addTour } from "../store/slices/tour-slice";

export const TourForm = () => {
  const dispatch = useDispatch();
  const [validate, setValidate] = useState(false);

  const [toursValue, setToursValue] = useState({
    title: "",
    image: "",
    description: "",
    cost: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setToursValue({
      ...toursValue,
      [name]: value,
      id: Date.now(),
    });
  };

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (
      !toursValue.title ||
      !toursValue.cost ||
      !toursValue.description ||
      !toursValue.image
    ) {
      return setValidate(true);
    }

    dispatch(postTour(toursValue));
    setValidate(false);

    setToursValue({
      title: "",
      image: "",
      description: "",
      cost: "",
    });
  };

  return (
    <StyledForm onSubmit={handleTourSubmit}>
      <p>Создать тур</p>
      <input
        type="text"
        name="title"
        placeholder="Название тура"
        value={toursValue.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Ссылка на картинку"
        value={toursValue.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание тура"
        value={toursValue.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="cost"
        placeholder="Стоимость"
        value={toursValue.cost}
        min={0}
        onChange={handleInputChange}
      />

      <button>Создать</button>
      {validate && <p style={{ color: "red" 
        
      }}>Заполните все поля</p>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin: 0 auto;
  /* box-shadow: -1px 6px 2px 4px rgba(34, 60, 80, 0.2); */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  & > input {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
  }

  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    color: #fff;
    background-color: #333;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
