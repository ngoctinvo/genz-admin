import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  Modal,
  Table,
  InputWrapper,
  Input,
  Box,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { Button } from "@mantine/core";
import { addNewUser, getUserTypeList, getUser, updateUser } from "Slices/user";
import { User } from "Interface/user";

type Props = {};
interface UserValues {
  matKhau: string;
  email: string;
  soDT: string;
  hoTen: string;
}
const ProfileForm = (props: Props) => {
  const [auth, setAuth] = useState({
    taiKhoan: "checkadd12",
    hoTen: "Yến Ngân",
    email: "yen12@gmail.com",
    soDT: "2525556nxnxn",
    matKhau: "s",
    maLoaiNguoiDung: "QuanTri",
  });
  let ta = () => {
    const tmp = localStorage.getItem("auth");
    return JSON.parse(tmp ? tmp : "");
  };
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const tmp = localStorage.getItem("auth");
    if (tmp === null) return;
    const res = JSON.parse(tmp);
    if (!tmp || typeof res === "undefined") return;
    setAuth(JSON.parse(tmp));
  }, []);

  //   const onSubmit = (payload: UserValues) => {
  //     console.log(payload);
  //     dispatch(addNewUser(payload));
  //   };
  const { register, handleSubmit } = useForm<UserValues>({
    mode: "onTouched",
  });
  const onSubmit = (values: UserValues) => {
    const res = {
      ...values,
      taiKhoan: auth.taiKhoan,
      maNhom: "GP10",
      maLoaiNguoiDung: auth.maLoaiNguoiDung,
    };
    dispatch(updateUser(res));
  };

  return (
    <div className="flex  flex-row gap-5 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <InputWrapper id="username" label="Tài khoản">
            <Input id="name" value={auth.taiKhoan} disabled />
          </InputWrapper>
          <InputWrapper id="password" label="Mật khẩu">
            <Input
              id="password"
              value={auth.matKhau}
              {...register("matKhau")}
            />
          </InputWrapper>
          <InputWrapper id="email" label="email">
            <Input id="email" value={auth.email} {...register("email")} />
          </InputWrapper>
          <InputWrapper id="phone" label="Số điện thoại">
            <Input id="phone" value={auth.soDT} {...register("soDT")} />
          </InputWrapper>
          <InputWrapper id="name" label="Họ tên">
            <Input id="name" defaultValue={auth.hoTen} {...register("hoTen")} />
          </InputWrapper>
        </Box>
        <Button type="submit" color="cyan" radius="md">
          Cập nhật
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
