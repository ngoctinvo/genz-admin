import React from "react";
import { Table } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import UserList from "../Components/List/User/UserList";

type Props = {};

const Users = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <Button radius="sm" variant="outline" color="pink" className="mb-10">
        <NavLink to="/user/add">Thêm người dùng </NavLink>
      </Button>
      <UserList />
    </div>
  );
};

export default Users;
