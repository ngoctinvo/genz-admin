export interface TheaterSystem {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}

export interface TheaterZone {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachRap: Theater[];
}
export interface Theater {
  maRap: string;
  tenRap: string;
}
