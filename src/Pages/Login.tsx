import LoginForm from "Components/LoginForm/LoginForm";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#1f1f1f" }}
      className="flex justify-center items-center"
    >
      <LoginForm />
    </div>
  );
};

export default Login;
