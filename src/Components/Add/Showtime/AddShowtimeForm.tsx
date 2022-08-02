import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getMovie } from "Slices/movie";
import {
  Button,
  InputWrapper,
  Input,
  Box,
  RadioGroup,
  Select,
  Radio,
  Checkbox,
} from "@mantine/core";
import {
  bookTicket,
  getTheaterList,
  getTheaterSystemList,
  getTicketRoom,
  getShowtimeList,
  getTheaterZoneList,
  setTheaterList,
  createShowtime,
} from "Slices/ticket";
import { number } from "yup/lib/locale";
import { TheaterZone } from "Interface/theater";

type Props = {};
interface ShowtimeValues {
  ngayChieuGioChieu: string;
  giaVe: number;
}
const AddShowtimeForm = (props: Props) => {
  const { theaterSystemList, error, isLoading, theaterList, theaterZoneList } =
    useSelector((state: RootState) => state.ticket);
  const { movieId } = useParams();
  const [checkTheaterZoneList, setCheckTheaterZoneList] = useState(false);
  const [checkTheaterList, setCheckTheaterList] = useState(false);
  const [selectedTheaterSymtem, setSelectedTheaterSymtem] = useState("");

  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedTheaterZone, setSelectedTheaterZone] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTheaterSystemList());
  }, []);

  useEffect(() => {
    if (selectedTheaterSymtem !== "") {
      dispatch(getTheaterZoneList(selectedTheaterSymtem));
      if (!Array.isArray(theaterZoneList)) return;
      setCheckTheaterZoneList(true);
    }
  }, [selectedTheaterSymtem]);

  useEffect(() => {
    // dispatch(setTheaterList(selectedTheaterZone));
    const list = theaterZoneList.find(
      (zone) => zone.maCumRap === selectedTheaterZone
    );
    if (typeof list === "undefined") return;
    const res = list.danhSachRap;
    dispatch(setTheaterList(res));
    setCheckTheaterList(true);
  }, [selectedTheaterZone]);

  const onSubmit = (payload: ShowtimeValues) => {
    const id = parseInt(movieId!);
    const data = {
      ...payload,
      maPhim: id,
      maRap: "" + selectedTheater,
      giaVe: +payload.giaVe,
    };
    dispatch(createShowtime(data));
  };
  const { register, handleSubmit } = useForm<ShowtimeValues>({
    mode: "onTouched",
  });

  const theaterSystemOptions = () => {
    let res: { value: string; label: string }[] = [];
    theaterSystemList.forEach((sys) => {
      res.push({
        value: sys.maHeThongRap,
        label: sys.tenHeThongRap,
      });
    });
    return res;
  };

  const theaterZoneOptions = () => {
    let res: { value: string; label: string }[] = [];

    theaterZoneList.forEach((sys) => {
      res.push({
        value: sys.maCumRap,
        label: sys.tenCumRap,
      });
    });
    return res;
  };
  const theaterOptions = () => {
    let res: { value: string; label: string }[] = [];

    theaterList.forEach((the) => {
      res.push({
        value: the.maRap,
        label: the.tenRap,
      });
    });
    return res;
  };

  return (
    <div className=" p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper label="Hệ thống rạp">
          <Select
            onChange={(e) => setSelectedTheaterSymtem(e ?? "")}
            data={theaterSystemOptions()}
            placeholder="Chọn hệ thống rạp"
            radius="sm"
          />
        </InputWrapper>
        {checkTheaterZoneList && (
          <InputWrapper label="Cụm rạp">
            <Select
              onChange={(e) => setSelectedTheaterZone(e ?? "")}
              data={theaterZoneOptions()}
              placeholder="Chọn cụm rạp"
              radius="sm"
            />
          </InputWrapper>
        )}
        {checkTheaterList && (
          <InputWrapper label="Rạp">
            <Select
              onChange={(e) => setSelectedTheater(e ?? "")}
              data={theaterOptions()}
              placeholder="Chọn rạp"
              radius="sm"
            />
          </InputWrapper>
        )}
        <InputWrapper id="datetime" label="Ngày giờ chiếu">
          <Input id="datetime" {...register("ngayChieuGioChieu")} radius="sm" />
        </InputWrapper>
        <InputWrapper id="price" label="Giá vé" className="mb-5">
          <Input id="price" {...register("giaVe")} radius="sm" />
        </InputWrapper>
        <Button type="submit" color="pink" radius="sm" className="mr-5">
          Tạo lịch chiếu
        </Button>
        <Button color="pink" variant="outline" type="button" radius="sm">
          Đóng
        </Button>
      </form>
    </div>
  );
};

export default AddShowtimeForm;
