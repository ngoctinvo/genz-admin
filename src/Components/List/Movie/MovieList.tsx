import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  Modal,
  Table,
  InputWrapper,
  Input,
  Title,
  Box,
  Textarea,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import Movie from "Interface/movie";
import { Button } from "@mantine/core";
import { getMovieList, getMovie, updateMovie, deleteMovie } from "Slices/movie";

type Props = {};

interface MovieValues {
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: FileList;
  moTa: string;
  ngayKhoiChieu: string;
}

const MovieList = (props: Props) => {
  const { movies, isLoading, error } = useSelector(
    (state: RootState) => state.movie
  );
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedMovie, setselectedMovie] = useState({
    maPhim: 0,
    tenPhim: "string",
    biDanh: "string",
    trailer: "string",
    hinhAnh: "string",
    moTa: "string",
    maNhom: "string",
    ngayKhoiChieu: "string",
    danhGia: 0,
    hot: false,
    dangChieu: false,
    sapChieu: true,
  });
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  useEffect(() => {
    dispatch(getMovie(selectedMovie.tenPhim));
  }, [selectedMovie]);

  const { register, handleSubmit } = useForm<MovieValues>({
    mode: "onTouched",
  });
  const onSubmit = (values: MovieValues) => {
    const payload = { ...values, hinhAnh: values.hinhAnh[0] };
    dispatch(updateMovie(payload));
  };
  const handleDeleteMovie = () => {
    dispatch(deleteMovie(selectedMovie.maPhim));
    setOpenDeleteModal(false);
  };

  return (
    <div className="basis-3/4 text-center text-white">
      <Table fontSize="md" className="text-white ">
        <thead>
          <tr className="text-slate-100">
            <th>Mã phim</th>
            <th>Tên phim</th>
            <th>Hình ảnh</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody className="text-slate-50">
          {movies.map((movie: Movie) => (
            <tr key={movie.maPhim}>
              <td> {movie.maPhim}</td>
              <td>{movie.tenPhim}</td>
              <td>
                <img
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                  height="50px"
                  width="25px"
                />
              </td>
              <td className="flex">
                <Button
                  radius="sm"
                  color="pink"
                  className="mr-2"
                  onClick={() => {
                    setOpenDetailModal(true);
                    setselectedMovie(movie);
                  }}
                >
                  <i className="fa fa-edit"></i>
                </Button>
                <Button
                  radius="sm"
                  variant="outline"
                  color="pink"
                  className="mr-2"
                  onClick={() => {
                    setOpenDeleteModal(true);
                    setselectedMovie(movie);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </Button>
                <Button
                  radius="sm"
                  color="pink"
                  variant="outline"
                  type="button"
                >
                  <NavLink to={`/movie/showtime/${movie.maPhim}`}>
                    {" "}
                    <i className="fa fa-calendar"></i>
                  </NavLink>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal opened={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Title order={3} className="text-center">
          Chi tiết thông tin phim
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <InputWrapper id="name" label="Tên phim">
            <Input
              radius="sm"
              id="name"
              value={selectedMovie.tenPhim}
              {...register("tenPhim")}
            />
          </InputWrapper>
          <InputWrapper id="alias" label="Bí danh">
            <Input
              radius="sm"
              id="alias"
              value={selectedMovie.biDanh}
              {...register("biDanh")}
            />
          </InputWrapper>
          <InputWrapper id="description" label="Mô tả">
            <Textarea
              radius="sm"
              id="description"
              value={selectedMovie.moTa}
              {...register("moTa")}
            />
          </InputWrapper>
          <InputWrapper id="date" label="Ngày khởi chiếu">
            <Input
              radius="sm"
              id="date"
              value={selectedMovie.ngayKhoiChieu}
              {...register("ngayKhoiChieu")}
            />
          </InputWrapper>
          <InputWrapper id="trailer" label="Trailer">
            <Input
              radius="sm"
              id="trailer"
              value={selectedMovie.trailer}
              {...register("trailer")}
            />
          </InputWrapper>{" "}
          <InputWrapper id="image" label="Hình ảnh">
            <Input
              radius="sm"
              id="image"
              type="file"
              {...register("hinhAnh")}
            />
          </InputWrapper>{" "}
          <Checkbox
            radius="sm"
            label="Hot"
            color="pink"
            className="mt-3 mb-1"
          />
          <RadioGroup label="Tình trạng" size="md" color="pink">
            <Radio value="" label="Đang chiếu" />
            <Radio value="coming" label="Sắp chiếu" />
          </RadioGroup>
          <Button radius="sm" type="submit" color="pink" className=" mt-4 mr-3">
            Cập nhật
          </Button>
          <Button
            radius="sm"
            color="pink"
            variant="outline"
            type="button"
            onClick={() => setOpenDetailModal(false)}
          >
            Đóng
          </Button>
        </form>
      </Modal>

      <Modal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Xác nhận xóa phim"
      >
        <div className="flex gap-5">
          <Button
            radius="sm"
            type="submit"
            color="pink"
            onClick={handleDeleteMovie}
          >
            Xóa
          </Button>
          <Button
            color="pink"
            variant="outline"
            type="button"
            onClick={() => setOpenDeleteModal(false)}
          >
            Đóng
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MovieList;
