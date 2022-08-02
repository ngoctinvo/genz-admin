import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo2.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="flex items-center justify-center text-white font-semibold text-xl h-32"
      style={{
        backgroundColor: "#f0abc0",
      }}
    >
      React Capstone
    </footer>
  );
};

export default Footer;
