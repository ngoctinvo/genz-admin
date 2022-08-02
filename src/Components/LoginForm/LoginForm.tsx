import React, { useState } from "react";
import { Input, Button, InputWrapper } from "@mantine/core";
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
  const [isFailed, setIsFailed] = useState(false);
  const { auth } = useSelector((state: RootState) => state.auth);

  const { register, handleSubmit } = useForm<LoginValues>({
    mode: "onTouched",
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (values: LoginValues) => {
    await dispatch(login(values));
    if (auth.accessToken) {
      setIsFailed(false);
      navigate("/profile");
    } else {
      setIsFailed(true);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "300px" }}
      className="flex flex-col justify-center"
    >
      <InputWrapper label="Tên đăng nhập">
        <Input placeholder="Username" {...register("taiKhoan")} radius="sm" />
      </InputWrapper>
      <InputWrapper label="Mật khẩu">
        <Input placeholder="Password" {...register("matKhau")} radius="sm" />
      </InputWrapper>
      <Button radius="sm" type="submit" color="pink" className="mt-6 mb-3 ">
        Đăng nhập
      </Button>
      {isFailed && (
        <span style={{ color: "red" }}>*Tên đăng nhập hoặc mật khẩu sai</span>
      )}
    </form>
  );
};

export default LoginForm;
