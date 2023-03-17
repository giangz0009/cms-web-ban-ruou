import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import LoginContainer from "src/containers/LoginContainer";
import { useAuth } from "src/context/AppContext";
import * as yup from "yup";

export type schemaLoginType = { username: string; password: string };

type Props = {};

const Login = (props: Props) => {
  const { signin, token, user } = useAuth();

  const navigate = useNavigate();

  const schema: yup.ObjectSchema<schemaLoginType> = yup.object().shape({
    username: yup.string().required("Tài khoản không được bỏ trống!"),
    password: yup
      .string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự!"),
  });

  const handleOnSubmit = useCallback((data: FieldValues) => {
    const { username, password } = data;

    signin(username, password, handleOnLogin);

    function handleOnLogin() {
      navigate("/");
    }
  }, []);

  if (token && user) return <Navigate to={"/"} />;

  return <LoginContainer schema={schema} onSubmit={handleOnSubmit} />;
};

export default Login;
