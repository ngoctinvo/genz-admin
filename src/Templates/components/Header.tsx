import React, { useState } from "react";
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
  return (
    <header
      className="flex flex-row justify-around items-center"
      style={{
        backgroundColor: "#15aabf",
        height: "100px",
      }}
    >
      <div className="logo">
        <img
          src="https://cdn141.picsart.com/270660629065211.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div className="account flex flex-row items-center  gap-1">
        <div className="avatar">
          <Avatar
            src="https://congdongdanhgia.com/wp-content/uploads/2022/03/anime-chibi-21.jpg"
            alt="avatar"
            radius="xl"
            size={50}
          />
        </div>
        <div className="control-menu">
          <Menu
            control={
              <Button
                variant="outline"
                color="cyan"
                radius="md"
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
