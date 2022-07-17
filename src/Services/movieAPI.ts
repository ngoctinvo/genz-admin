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
  addNewMovie: (movie: any) => {
    const formData = new FormData();
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP10");
    return axiosAdmin.post<Movie>("QuanLyPhim/ThemPhimUploadHinh", formData);
  },
  updateMovie: (movie: any) => {
    const formData = new FormData();
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP10");
    return axiosAdmin.post<Movie>("QuanLyPhim/CapNhatPhimUpload", formData);
  },
  deleteMovie: () => {
    return axiosAdmin.delete<Movie>("QuanLyPhim/XoaPhim");
  },
  // Và những còn lại liên quan đến movie...
};

export default movieAPI;
