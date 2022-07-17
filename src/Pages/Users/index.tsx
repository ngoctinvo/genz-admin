import React from "react";
import { Table } from "@mantine/core";
import UserList from "./components/UserList";

type Props = {};

const Users = (props: Props) => {
  return (
    <div className="basis-3/4 md:basis-2/3">
      <UserList />
    </div>
  );
};

export default Users;
