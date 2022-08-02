import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";
import { Box } from "@mantine/core";
import { Menu } from "@mantine/core";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  horizontal?: boolean;
};

const MenuSide = () => {
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  });

  return (
    <div className="w-full lg:w-3/12 pr-5 ">
      <p
        className="mb-5 text-center "
        style={{
          fontSize: "72px",
          color: "#f0abc0",
          fontWeight: 600,
        }}
      >
        GenZ
      </p>
      <Navbar className={styles.nav_bar}>
        <NavLink to="/user">
          <Box
            className={styles.nav_link}
            sx={
              path === "/user"
                ? { backgroundColor: "#f0abc0", color: "#1f1f1f" }
                : {}
            }
          >
            Users
          </Box>
        </NavLink>
        <NavLink to="/movie">
          <Box
            className={styles.nav_link}
            sx={
              path === "/movie"
                ? { backgroundColor: "#f0abc0", color: "#1f1f1f" }
                : {}
            }
          >
            Movies
          </Box>
        </NavLink>
        <NavLink to="/showtime">
          <Box
            className={styles.nav_link}
            sx={
              path === "/showtime"
                ? { backgroundColor: "#f0abc0", color: "#1f1f1f" }
                : {}
            }
          >
            Showtime
          </Box>
        </NavLink>
      </Navbar>
    </div>
  );
};

export default MenuSide;
