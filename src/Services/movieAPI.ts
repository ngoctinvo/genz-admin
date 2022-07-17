import Movie, { ShowTimes } from "Interface/movie";
import axiosAdmin from "./axiosAdmin";

const movieAPI = {
  getMovieList: () => {
    return axiosAdmin.get<Movie[]>("QuanLyPhim/LayDanhSachPhim");
  },
  getMovie: (name: string) => {
    return axiosAdmin.get<Movie[]>("QuanLyPhim/LayDanhSachPhim", {
      params: {
        tenPhim: name,
      },
    });
  },
  addNewMovie: (movieId: string) => {
    return axiosAdmin.post<Movie>("QuanLyPhim/ThemPhimUploadHinh", {});
  },
  updateMovie: (movieId: string) => {
    return axiosAdmin.get<ShowTimes>("QuanLyPhim/CapNhatPhimUpload", {});
  },
  deleteMovie: () => {
    return axiosAdmin.delete<Movie>("QuanLyPhim/XoaPhim");
  },
  // Và những còn lại liên quan đến movie...
};

export default movieAPI;
