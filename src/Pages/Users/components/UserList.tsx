import React, { useEffect, useState } from "react";
import { Modal, Table, InputWrapper, Input } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { User } from "Interface/user";
import { getUserList, getUser } from "Slices/user";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";

type Props = {};

interface UserValues {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  matKhau: string;
  maLoaiNguoiDung: string;
}

const UserList = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maLoaiNguoiDung: "",
  });
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("dispatch movie list");
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    dispatch(getUser(selectedUser.taiKhoan));
  }, [selectedUser]);

  const { register, handleSubmit } = useForm<UserValues>({
    mode: "onTouched",
  });
  const onSubmit = (values: UserValues) => {
    console.log(values);
  };

  return (
    <div className="basis-3/4">
      <Table verticalSpacing="xs" fontSize="md">
        <thead>
          <th>Mã phim</th>
          <th>Tên phim</th>

          <th></th>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr>
              <td> {user.taiKhoan}</td>
              <td>{user.hoTen}</td>

              <td className="flex">
                <Button
                  color="teal"
                  className="mr-2"
                  onClick={() => {
                    setOpened(true);
                    setSelectedUser(user);
                  }}
                >
                  Chi tiết
                </Button>
                <Button color="red">Xóa</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Chi tiết thông tin người dùng"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper id="account">
            <Input
              id="account"
              value={selectedUser.taiKhoan}
              {...register("taiKhoan")}
            />
          </InputWrapper>
          <InputWrapper id="name">
            <Input
              id="name"
              value={selectedUser.hoTen}
              {...register("hoTen")}
            />
          </InputWrapper>
          <InputWrapper id="email">
            <Input
              id="email"
              value={selectedUser.email}
              {...register("email")}
            />
          </InputWrapper>
          <InputWrapper id="phone">
            <Input id="phone" value={selectedUser.soDT} {...register("soDT")} />
          </InputWrapper>
          <Button color="cyan" type="submit">
            Cập nhật
          </Button>
          <Button color="gray" type="button" onClick={() => setOpened(false)}>
            Đóng
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default UserList;
