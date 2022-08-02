import AddUserForm from "Components/Add/User/AddUserForm";
import React from "react";

type Props = {};

const AddUser = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <AddUserForm />
    </div>
  );
};

export default AddUser;
