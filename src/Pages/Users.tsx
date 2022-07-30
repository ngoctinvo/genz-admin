import React from "react";
import { Table } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import UserList from "../Components/UserList";

type Props = {};

const Users = (props: Props) => {
  return (
    <div style={{ width: "80%" }}>
      <Button variant="outline" color="cyan" radius="md">
        <NavLink to="/user/add">Thêm người dùng </NavLink>
      </Button>
      <UserList />
    </div>
  );
};

export default Users;
