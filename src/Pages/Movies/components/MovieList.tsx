import React, { useEffect } from "react";
import { Table } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import Movie from "Interface/movie";
import { getUserList } from "Slices/user";
import { Button } from "@mantine/core";

type Props = {};

const MovieList = (props: Props) => {
  const { movies, isLoading, error } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("dispatch movie list");
    dispatch(getUserList());
  }, []);
  return (
    <div className="basis-3/4">
      <Table verticalSpacing="xs" fontSize="md">
        <thead>
          <th>Mã phim</th>
          <th>Tên phim</th>
          <th>Hình ảnh</th>
          <th></th>
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
                <Button color="teal" className="mr-2">
                  Chi tiết
                </Button>
                <Button color="red">Xóa</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
