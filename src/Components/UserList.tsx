import React, { useEffect, useState } from "react";
import { Modal, Table, InputWrapper, Input } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { User } from "Interface/user";
import { getUserList, getUser, deleteUser } from "Slices/user";
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
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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

  const handleDeleteUser = () => {
    dispatch(deleteUser(selectedUser.taiKhoan));
    setOpenDeleteModal(false);
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
                  color="cyan"
                  radius="md"
                  className="mr-2"
                  onClick={() => {
                    setOpenDetailModal(true);
                    setSelectedUser(user);
                  }}
                >
                  Chi tiết
                </Button>
                <Button
                  variant="outline"
                  color="cyan"
                  radius="md"
                  onClick={() => {
                    setOpenDeleteModal(true);
                    setSelectedUser(user);
                  }}
                >
                  Xóa
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        opened={openDetailModal}
        onClose={() => setOpenDetailModal(false)}
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
          <Button radius="md" color="cyan" type="submit">
            Cập nhật
          </Button>
          <Button
            color="gray"
            type="button"
            radius="md"
            onClick={() => setOpenDetailModal(false)}
          >
            Đóng
          </Button>
        </form>
      </Modal>
      <Modal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Xác nhận xóa phim"
      >
        <div className="flex gap-5">
          <Button
            type="submit"
            color="cyan"
            radius="md"
            onClick={handleDeleteUser}
          >
            Xóa
          </Button>
          <Button
            color="gray"
            radius="md"
            type="button"
            onClick={() => setOpenDeleteModal(false)}
          >
            Đóng
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserList;
