import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";
import { Box } from "@mantine/core";
import { Menu } from "@mantine/core";

type Props = {
  horizontal?: boolean;
};

const MenuSide = () => {
  return (
    <div style={{ width: "20%" }}>
      <p
        style={{
          fontSize: "72px",
          color: "#15aabf",
          fontWeight: 600,
          textAlign: "center",

          marginBottom: "20px",
        }}
      >
        GenZ
      </p>
      <Navbar
        sx={{
          backgroundColor: "#15abbf18",

          height: "fit-content",
          borderRadius: "10px",
          fontSize: "18px",
          color: "#001b1f",
          fontWeight: 500,
          border: "none",
        }}
      >
        <NavLink to="/user">
          <Box
            sx={{
              textAlign: "center",
              cursor: "pointer",
              padding: "15px 0",

              "&:hover": {
                backgroundColor: "#15aabf4f",
                borderRadius: "10px",
              },
            }}
          >
            Users
          </Box>
        </NavLink>
        <NavLink to="/movie">
          <Box
            sx={{
              textAlign: "center",
              cursor: "pointer",
              padding: "12px 0",
              "&:hover": {
                backgroundColor: "#15aabf4f",
                borderRadius: "10px",
              },
            }}
          >
            Movies
          </Box>
        </NavLink>
        <NavLink to="/showtime">
          <Box
            sx={{
              textAlign: "center",
              cursor: "pointer",
              padding: "12px 0",
              "&:hover": {
                backgroundColor: "#15aabf4f",
                borderRadius: "10px",
              },
            }}
          >
            Showtime
          </Box>
        </NavLink>
      </Navbar>
    </div>
  );
};

export default MenuSide;
