import AddUserForm from "Components/AddUserForm";
import React from "react";

type Props = {};

const AddUser = (props: Props) => {
  return (
    <div style={{ width: "80%" }}>
      <AddUserForm />
    </div>
  );
};

export default AddUser;
