import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  Modal,
  Table,
  InputWrapper,
  Input,
  Box,
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
    console.log("dispatch movie list");
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
    console.log(payload);
    dispatch(updateMovie(payload));
  };
  const handleDeleteMovie = () => {
    dispatch(deleteMovie(selectedMovie.maPhim));
    setOpenDeleteModal(false);
  };

  return (
    <div className="basis-3/4">
      <Button variant="outline" color="cyan" radius="md">
        <NavLink to="/movies/add">Thêm phim </NavLink>
      </Button>
      <Table verticalSpacing="xs" fontSize="md">
        <thead>
          <tr>
            <th>Mã phim</th>
            <th>Tên phim</th>
            <th>Hình ảnh</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: Movie) => (
            <tr>
              <td> {movie.maPhim}</td>
              <td>{movie.tenPhim}</td>
              <td>
                <img
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                  width="50px"
                  height="30px"
                />
              </td>
              <td className="flex">
                <Button
                  color="cyan"
                  radius="md"
                  className="mr-2"
                  onClick={() => {
                    setOpenDetailModal(true);
                    setselectedMovie(movie);
                  }}
                >
                  Chi tiết
                </Button>
                <Button
                  variant="outline"
                  color="cyan"
                  radius="md"
                  onClick={() => {
                    setOpenDeleteModal(true);
                    setselectedMovie(movie);
                  }}
                >
                  Xóa
                </Button>
                <Button color="gray" radius="md" type="button">
                  <NavLink to={`/movies/showtime/${movie.maPhim}`}>
                    {" "}
                    Tạo lịch chiếu
                  </NavLink>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        opened={openDetailModal}
        onClose={() => setOpenDetailModal(false)}
        title="Chi tiết thông tin phim"
      >
        <div className="flex  flex-row gap-5 p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="basis-1/2">
              <InputWrapper id="name" label="Tên phim">
                <Input
                  id="name"
                  value={selectedMovie.tenPhim}
                  {...register("tenPhim")}
                />
              </InputWrapper>
              <InputWrapper id="alias" label="Bí danh">
                <Input
                  id="alias"
                  value={selectedMovie.biDanh}
                  {...register("biDanh")}
                />
              </InputWrapper>
              <InputWrapper id="description" label="Mô tả">
                <Input
                  id="description"
                  value={selectedMovie.moTa}
                  {...register("moTa")}
                />
              </InputWrapper>
              <InputWrapper id="date" label="Ngày khởi chiếu">
                <Input
                  id="date"
                  value={selectedMovie.ngayKhoiChieu}
                  {...register("ngayKhoiChieu")}
                />
              </InputWrapper>
            </Box>
            <Box className="basis-1/2">
              <InputWrapper id="trailer" label="Trailer">
                <Input
                  id="trailer"
                  value={selectedMovie.trailer}
                  {...register("trailer")}
                />
              </InputWrapper>{" "}
              <InputWrapper id="image" label="Hình ảnh">
                <Input id="image" type="file" {...register("hinhAnh")} />
              </InputWrapper>
              <Checkbox label="Hot" color="cyan" />
              <RadioGroup label="Tình trạng" size="md" color="cyan">
                <Radio value="" label="Đang chiếu" />
                <Radio value="coming" label="Sắp chiếu" />
              </RadioGroup>
            </Box>
            <Button type="submit" radius="md" color="cyan">
              Cập nhật
            </Button>
            <Button
              color="gray"
              radius="md"
              type="button"
              onClick={() => setOpenDetailModal(false)}
            >
              Đóng
            </Button>
          </form>
        </div>
      </Modal>

      <Modal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Xác nhận xóa phim"
      >
        <div className="flex gap-5">
          <Button
            type="submit"
            color="cyan"
            radius="md"
            onClick={handleDeleteMovie}
          >
            Xóa
          </Button>
          <Button
            color="gray"
            radius="md"
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
