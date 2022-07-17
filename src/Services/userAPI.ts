import { User } from "Interface/user";
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
  updateUser: () => {
    return axiosAdmin.post<User>("QuanLyNguoiDung/CapNhatThongTinNguoiDung");
  },
  deleteUser: () => {
    return axiosAdmin.delete<User>("QuanLyNguoiDung/XoaNguoiDung");
  },
};
export default userAPI;
