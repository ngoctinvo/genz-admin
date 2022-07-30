import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo2.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      style={{
        backgroundColor: "#15aabf",
        height: "100px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      React Capstone
    </footer>
  );
};

export default Footer;
