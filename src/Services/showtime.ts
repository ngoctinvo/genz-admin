import { Showtime } from "Interface/showtime";
import axiosAdmin from "./axiosAdmin";

const showtimeAPI = {
  getUserList: () => {
    return axiosAdmin.get<Showtime[]>("QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
  getUser: () => {
    return axiosAdmin.get<Showtime>("QuanLyNguoiDung/LayThongTinNguioDung");
  },
  updateUser: () => {
    return axiosAdmin.post<Showtime>(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung"
    );
  },
  deleteUser: () => {
    return axiosAdmin.delete<Showtime>("QuanLyNguoiDung/XoaNguoiDung");
  },
};
export default showtimeAPI;
