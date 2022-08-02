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
    taiKhoan: "",
    email: "",
    soDT: "",
    hoTen: "",
    maLoaiNguoiDung: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user === null) return;
    setAuth(JSON.parse(user));
  }, []);

  const { register, handleSubmit } = useForm<UserValues>({
    mode: "onTouched",
  });
  const onSubmit = (values: UserValues) => {
    const res = {
      ...values,
      taiKhoan: auth?.taiKhoan || "",
      maNhom: "GP10",
      maLoaiNguoiDung: auth?.maLoaiNguoiDung,
    };
    dispatch(updateUser(res));
  };

  return (
    <div className=" p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper id="username" label="Tài khoản">
          <Input id="name" value={auth.taiKhoan} disabled />
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
        <Button radius="sm" type="submit" color="pink" className="mt-4">
          Cập nhật
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
