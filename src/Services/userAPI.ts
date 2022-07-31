import { Auth } from "Interface/auth";
import { Login, User, UserType } from "Interface/user";
import axiosAdmin from "./axiosAdmin";

const userAPI = {
  getUserList: () => {
    return axiosAdmin.get<User[]>("QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
  getUser: (keyword: string) => {
    return axiosAdmin.get<User>("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        tuKhoa: keyword,
      },
    });
  },
  updateUser: (nd: User) => {
    return axiosAdmin.put<User>("QuanLyNguoiDung/CapNhatThongTinNguoiDung", nd);
  },
  deleteUser: (taiKhoan: string) => {
    return axiosAdmin.delete<User>("QuanLyNguoiDung/XoaNguoiDung", {
      params: {
        TaiKhoan: taiKhoan,
      },
    });
  },
  addNewUser: (nd: User) => {
    return axiosAdmin.post<User>("QuanLyNguoiDung/ThemNguoiDung", nd);
  },
  getUserTypeList: () => {
    return axiosAdmin.get<UserType>("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  login: (ndDN: Login) => {
    return axiosAdmin.post<Auth>("QuanLyNguoiDung/DangNhap", ndDN);
  },
};
export default userAPI;
