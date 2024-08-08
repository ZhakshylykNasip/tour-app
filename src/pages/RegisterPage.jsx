import React, { useRef } from "react";
import styled from "styled-components";
import { axiosInstance } from "../api/axiosInstance";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequest } from "../store/thunks/authThunk";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const dispatch = useDispatch();
  const { registrationStatus } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleSubmitHandler = async (userData) => {
    if (userData.email === "admin@gmail.com") {
      userData.role = "ADMIN";
    } else {
      userData.role = "USER";
    }
    console.log(userData);

    dispatch(signUpRequest({ userData, navigate }));
  };

  return (
    <RegisterContainer>
      <section>
        <h1>Registration</h1>
        {registrationStatus && <p>{registrationStatus}</p>}
        <form onSubmit={handleSubmit(handleSubmitHandler)}>
          <input
            type="text"
            placeholder="first name"
            {...register("firstName", { required: "заполните фамилия" })}
          />
          <StyledErrorMessage>{errors?.firstName?.message}</StyledErrorMessage>
          <input
            {...register("lastName", { required: "заполните имя" })}
            type="text"
            placeholder="last name"
          />
          <StyledErrorMessage>{errors?.lastName?.message}</StyledErrorMessage>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "заполните email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "не правильно введен email",
              },
            })}
            type="text"
            placeholder="email"
          />
          <StyledErrorMessage>{errors?.email?.message}</StyledErrorMessage>

          <input
            {...register("password", {
              required: {
                value: true,
                message: "заполните password",
              },
              minLength: {
                value: 6,
                message: "пароль должен быть больше 6 символов",
              },
              maxLength: {
                value: 14,
                message: "слишком длинный пароль вы можете забыть(",
              },
            })}
            type="text"
            placeholder="password"
          />
          <StyledErrorMessage>{errors?.password?.message}</StyledErrorMessage>
          <button type="submit">register</button>
          <p>
            Вы уже зарегистрированы ? <Link to={"/login"}> войти</Link>{" "}
          </p>
        </form>
      </section>
    </RegisterContainer>
  );
};

const StyledErrorMessage = styled.span`
  color: red;
`;

const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > section {
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #80808073;
    border-radius: 10px;
    border: 2px solid aquamarine;
    gap: 50px;
    padding: 40px;

    & > h1 {
      text-align: center;
    }
   

    & > form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 500px;

      & > input {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 500;
        padding: 6px;
      }

      & > button {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: green;
        color: white;
        font-size: 19px;
        text-transform: capitalize;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
