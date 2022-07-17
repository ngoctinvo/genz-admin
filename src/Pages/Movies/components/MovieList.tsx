import React, { useEffect, useState } from "react";
import { Modal, Table, InputWrapper, Input } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import Movie from "Interface/movie";
import { Button } from "@mantine/core";
import { getMovieList, getMovie } from "Slices/movie";

type Props = {};

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
        title="Chi tiết thông tin người dùng"
      >
        <InputWrapper id="account">
          <Input id="account" value={selectedMovie.tenPhim} />
        </InputWrapper>
        <InputWrapper id="name">
          <Input id="name" value={selectedMovie.biDanh} />
        </InputWrapper>
        <InputWrapper id="email">
          <Input id="email" value={selectedMovie.moTa} />
        </InputWrapper>
        <InputWrapper id="phone">
          <Input id="phone" value={selectedMovie.ngayKhoiChieu} />
        </InputWrapper>
        <InputWrapper id="phone">
          <Input id="phone" value={selectedMovie.maNhom} />
        </InputWrapper>{" "}
        <InputWrapper id="phone">
          <Input id="phone" value={selectedMovie.trailer} />
        </InputWrapper>
      </Modal>
    </div>
  );
};

export default MovieList;
