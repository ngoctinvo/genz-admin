import React from "react";
import { Input, Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { login } from "Slices/auth";
import { useNavigate } from "react-router-dom";

type Props = {};
interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const LoginForm = (props: Props) => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { register, handleSubmit } = useForm<LoginValues>({
    mode: "onTouched",
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: LoginValues) => {
    const res = dispatch(login(values));
    if (auth.accessToken) {
      navigate("/profile");
    } else {
      alert("Sai tài khoản");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Username" {...register("taiKhoan")} />
      <Input placeholder="Password" {...register("matKhau")} />
      <Button type="submit" color="cyan">
        Đăng nhập
      </Button>
    </form>
  );
};

export default LoginForm;
