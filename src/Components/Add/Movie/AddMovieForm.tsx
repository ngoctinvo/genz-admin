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
import { getMovieList, getMovie, addNewMovie } from "Slices/movie";

type Props = {};
interface MovieValues {
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: FileList;
  moTa: string;
  ngayKhoiChieu: string;
  dangChieu: boolean;
  hot: boolean;
  danhGia: number;
}

// interface Movie {
//   maPhim: number;
//   tenPhim: string;
//   biDanh: string;
//   trailer: string;
//   hinhAnh: string;
//   moTa: string;
//   maNhom: string;
//   ngayKhoiChieu: string;
//   danhGia: number;
//   hot: boolean;
//   dangChieu: boolean;
//   sapChieu: boolean;
// }

const AddMovieForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: MovieValues) => {
    const payload = {
      ...values,
      hinhAnh: values.hinhAnh[0],
      sapChieu: !values.dangChieu,
      danhGia: +values.danhGia,
    };
    dispatch(addNewMovie(payload));
  };
  const { register, handleSubmit } = useForm<MovieValues>({
    mode: "onTouched",
  });
  return (
    <div className=" p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="basis-1/2">
          <InputWrapper id="name" label="Tên phim">
            <Input id="name" {...register("tenPhim")} />
          </InputWrapper>
          <InputWrapper id="alias" label="Bí danh">
            <Input id="alias" {...register("biDanh")} />
          </InputWrapper>
          <InputWrapper id="description" label="Mô tả">
            <Input id="description" {...register("moTa")} />
          </InputWrapper>
          <InputWrapper id="date" label="Ngày khởi chiếu">
            <Input id="date" {...register("ngayKhoiChieu")} />
          </InputWrapper>
        </Box>
        <Box className="basis-1/2">
          <InputWrapper id="trailer" label="Trailer">
            <Input id="trailer" {...register("trailer")} />
          </InputWrapper>{" "}
          <InputWrapper id="image" label="Hình ảnh">
            <Input id="image" type="file" {...register("hinhAnh")} />
          </InputWrapper>
          <Checkbox
            label="Hot"
            color="pink"
            {...register("hot")}
            className="mt-3 mb-2"
          />
          <RadioGroup
            label="Tình trạng"
            size="md"
            color="pink"
            {...register("dangChieu")}
            onChange={(e) => console.log(e)}
          >
            <Radio value="true" label="Đang chiếu" />
            <Radio value="false" label="Sắp chiếu" />
          </RadioGroup>
          <InputWrapper id="rate" label="Đánh giá">
            <Input id="rate" {...register("danhGia")} />
          </InputWrapper>
        </Box>
        <Button radius="sm" type="submit" color="pink" className="mt-4 mr-4">
          Cập nhật
        </Button>
        <Button radius="sm" color="pink" variant="outline" type="button">
          Đóng
        </Button>
      </form>
    </div>
  );
};

export default AddMovieForm;
