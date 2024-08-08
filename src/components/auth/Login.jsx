import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInRequest } from "../../store/thunks/authThunk";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <RegisterContainer>
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            type="text"
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
            placeholder="введите email"
          />
          <span style={{ color: "red" }}>{errors?.email?.message}</span>
          <input
            type="text"
            {...register("password", {
              required: {
                value: true,
                message: "заполните password",
              },
              minLength: {
                value: 6,
                message: "пароль должен быть больше 6 символов",
              },
            })}
            placeholder="введите  password"
          />
          <span style={{ color: "red" }}>{errors?.password?.message}</span>
          <button type="submit">login</button>

          <p>
            У вас нет аккаунт ?{" "}
            <Link to={"/register"}> Зарегистрироваться</Link>
          </p>
        </form>
      </section>
    </RegisterContainer>
  );
};

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
      height: 300px;

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
