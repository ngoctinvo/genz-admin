import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar, Navbar } from "@mantine/core";
import { Box } from "@mantine/core";
import { Menu, Button, Divider, Text } from "@mantine/core";
import {
  Settings,
  Search,
  Photo,
  MessageCircle,
  Trash,
  ArrowsLeftRight,
} from "tabler-icons-react";

type Props = {
  horizontal?: boolean;
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="flex flex-row justify-around items-center h-32"
      style={{
        backgroundColor: "#f0abc0",
      }}
    >
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cdn141.picsart.com/270660629065211.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div className="account flex flex-row items-center  gap-1">
        <div className="avatar">
          <Avatar
            src="https://i.pinimg.com/1200x/b7/b0/99/b7b09981fabc7130a7a18e32aabdb63f.jpg"
            alt="avatar"
            radius="xl"
            size={50}
            onClick={() => navigate("/profile")}
            sx={{ cursor: "pointer" }}
          />
        </div>
        <div className="control-menu">
          <Menu
            control={
              <Button
                radius="sm"
                variant="outline"
                color="pink"
                style={{ backgroundColor: "#fff" }}
              >
                Tài khoản
              </Button>
            }
          >
            <Menu.Item>
              <NavLink to="/profile">Trang cá nhân</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink onClick={() => localStorage.clear()} to="/login">
                Đăng xuất
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
