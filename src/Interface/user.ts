export interface User {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  matKhau: string;
  maLoaiNguoiDung: string;
}

export interface UserType {
  maLoaiNguoiDung: string;
  tenLoai: string;
}
export interface Login {
  taiKhoan: string;
  matKhau: string;
}
