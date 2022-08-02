import React, { useEffect, useState } from "react";
import { Modal, Table, InputWrapper, Input, Title } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { User } from "Interface/user";
import { getUserList, getUser, deleteUser, updateUser } from "Slices/user";
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
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    console.log(selectedUser);
    dispatch(getUser(selectedUser.taiKhoan));
  }, [selectedUser]);

  const { register, handleSubmit, setValue } = useForm<UserValues>({
    mode: "onTouched",
  });

  const onUpdateUser = (values: UserValues) => {
    console.log({ values });
    //dispatch(updateUser(values));
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(selectedUser.taiKhoan));
    setOpenDeleteModal(false);
  };
  return (
    <div className="text-center">
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
                  radius="sm"
                  color="pink"
                  className="mr-2"
                  onClick={() => {
                    // tà đạo vl
                    setValue("taiKhoan", user.taiKhoan);
                    setValue("email", user.email);
                    setValue("soDT", user.soDT);
                    setValue("hoTen", user.hoTen);
                    setSelectedUser({ ...user });
                    setOpenDetailModal(true);
                  }}
                >
                  <i className="fa fa-edit"></i>
                </Button>
                <Button
                  radius="sm"
                  variant="outline"
                  color="pink"
                  onClick={() => {
                    setSelectedUser({ ...user });
                    setOpenDeleteModal(true);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal opened={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <form onSubmit={handleSubmit(onUpdateUser)} className="px-5">
          <Title order={3} className="text-center">
            Chi tiết thông tin người dùng
          </Title>
          <InputWrapper id="account" label="Tài khoản">
            <Input radius="sm" id="account" {...register("taiKhoan")} />
          </InputWrapper>
          <InputWrapper id="name" label="Họ tên">
            <Input radius="sm" id="name" {...register("hoTen")} />
          </InputWrapper>
          <InputWrapper id="email" label="Email">
            <Input radius="sm" id="email" {...register("email")} />
          </InputWrapper>
          <InputWrapper id="phone" label="Số điện thoại">
            <Input radius="sm" id="phone" {...register("soDT")} />
          </InputWrapper>
          <Button radius="sm" color="pink" type="submit" className="mt-4 mr-3">
            Cập nhật
          </Button>
          <Button
            radius="sm"
            color="pink"
            variant="outline"
            type="button"
            onClick={() => setOpenDetailModal(false)}
          >
            Đóng
          </Button>
        </form>
      </Modal>
      <Modal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Xác nhận xóa người dùng"
      >
        <div className="flex gap-5">
          <Button
            radius="sm"
            type="submit"
            color="pink"
            onClick={handleDeleteUser}
          >
            Xóa
          </Button>
          <Button
            radius="sm"
            color="pink"
            variant="outline"
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
