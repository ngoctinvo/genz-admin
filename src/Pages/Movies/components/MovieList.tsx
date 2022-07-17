import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
import { getMovieList, getMovie } from "Slices/movie";
import { Registered } from "tabler-icons-react";

type Props = {};

interface MovieValues {
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: File;
  moTa: string;
  ngayKhoiChieu: string;
}

const MovieList = (props: Props) => {
  const { movies, isLoading, error } = useSelector(
    (state: RootState) => state.movie
  );
  const [opened, setOpened] = useState(false);
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
    console.log(values);
  };

  return (
    <div className="basis-3/4">
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
                  color="teal"
                  className="mr-2"
                  onClick={() => {
                    setOpened(true);
                    setselectedMovie(movie);
                  }}
                >
                  Chi tiết
                </Button>
                <Button color="red">Xóa</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
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
            <Button type="submit" color="cyan">
              Cập nhật
            </Button>
            <Button color="gray" type="button" onClick={() => setOpened(false)}>
              Đóng
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default MovieList;
