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
import Movie from "Interface/movie";
import { Button } from "@mantine/core";
import { addNewUser, getUserTypeList } from "Slices/user";

type Props = {};
interface UserValues {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
}
const AddUserForm = (props: Props) => {
  const { userTypeList } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserTypeList());
  }, []);

  const onSubmit = (payload: UserValues) => {
    dispatch(addNewUser(payload));
  };
  const { register, handleSubmit } = useForm<UserValues>({
    mode: "onTouched",
  });

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="basis-1/2">
          <InputWrapper id="username" label="Tài khoản">
            <Input id="name" {...register("taiKhoan")} />
          </InputWrapper>
          <InputWrapper id="password" label="Mật khẩu">
            <Input id="password" {...register("matKhau")} />
          </InputWrapper>
          <InputWrapper id="email" label="email">
            <Input id="email" {...register("email")} />
          </InputWrapper>
          <InputWrapper id="phone" label="Số điện thoại">
            <Input id="phone" {...register("soDT")} />
          </InputWrapper>
        </Box>
        <Box className="basis-1/2">
          <InputWrapper id="groupId" label="Mã nhóm">
            <Input id="groupId" {...register("maNhom")} />
          </InputWrapper>{" "}
          <InputWrapper id="typeId" label="Mã loại người dùng">
            <Input id="typeId" {...register("maLoaiNguoiDung")} />
          </InputWrapper>{" "}
          <InputWrapper id="name" label="Họ tên">
            <Input id="name" {...register("hoTen")} />
          </InputWrapper>
        </Box>
        <Button radius="sm" type="submit" color="pink" className="mt-4 mr-3">
          Tạo
        </Button>
        <Button radius="sm" color="pink" variant="outline" type="button">
          Đóng
        </Button>
      </form>
    </div>
  );
};

export default AddUserForm;
