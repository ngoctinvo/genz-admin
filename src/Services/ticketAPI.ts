import { TheaterZone } from "./../Interface/theater";
import Movie, { ShowTimes } from "Interface/movie";
import { Showtime, ShowtimeNew } from "Interface/showtime";
import { Ticket } from "Interface/ticket";
import { Theater, TheaterSystem } from "Interface/theater";
import axiosAdmin from "./axiosAdmin";

const movieAPI = {
  bookTicket: (ticket: Ticket) => {
    return axiosAdmin.post<Movie[]>("QuanLyDatVe/DatVe", ticket);
  },
  getTicketRoom: (maLichChieu: number) => {
    return axiosAdmin.get<Movie[]>("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: maLichChieu,
      },
    });
  },

  createShowtime: (lich: ShowtimeNew) => {
    return axiosAdmin.post<Showtime>("QuanLyDatVe/TaoLichChieu", lich);
  },
  getTheaterSystemList: () => {
    return axiosAdmin.get<TheaterSystem[]>("QuanLyRap/LayThongTinHeThongRap");
  },
  getTheaterSystem: (maHeThongRap: string) => {
    return axiosAdmin.get<TheaterSystem>("QuanLyRap/LayThongTinHeThongRap", {
      params: {
        maHeThongRap: maHeThongRap,
      },
    });
  },
  getTheaterZoneList: (maHeThongRap: string) => {
    return axiosAdmin.get<TheaterZone[]>(
      "QuanLyRap/LayThongTinCumRapTheoHeThong",
      {
        params: {
          maHeThongRap: maHeThongRap,
        },
      }
    );
  },
  getTheaterList: (maHeThongRap: string) => {
    return axiosAdmin.get<Theater>("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: maHeThongRap,
      },
    });
  },
  getShowtimeList: (maHeThongRap: string) => {
    return axiosAdmin.get<Showtime>(
      "QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maHeThongRap: maHeThongRap,
        },
      }
    );
  },
};

export default movieAPI;
