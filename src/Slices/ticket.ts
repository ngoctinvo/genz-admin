import { TheaterSystem, TheaterZone } from "./../Interface/theater";
import { Theater } from "Interface/theater";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AsyncThunk,
} from "@reduxjs/toolkit";
import { Ticket } from "Interface/ticket";
import ticketAPI from "../Services/ticketAPI";
import { Showtime, ShowtimeNew } from "Interface/showtime";

interface State {
  isLoading: boolean;
  error: string | null;
  theaterSystemList: TheaterSystem[];
  currentTheaterSystem: TheaterSystem;
  theaterList: Theater[];
  theaterZoneList: TheaterZone[];

  currentTheater: Theater;
  showtimeList: Showtime[];
  currentShowtime: Showtime;
}

const initialState: State = {
  theaterSystemList: [],
  isLoading: false,
  error: null,
  theaterList: [],
  theaterZoneList: [],

  currentTheaterSystem: {
    maHeThongRap: "",
    tenHeThongRap: "",
    biDanh: "",
    logo: "",
  },
  currentTheater: { maRap: "", tenRap: "" },
  showtimeList: [],
  currentShowtime: {
    maLichChieu: 0,
    maRap: "",
    tenRap: "",
    ngayChieuGioChieu: "",
    giaVe: 0,
  },
};

export const bookTicket = createAsyncThunk(
  "ticket/bookTicket",
  async (ticket: Ticket) => {
    try {
      const data = await ticketAPI.bookTicket(ticket);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getTicketRoom = createAsyncThunk(
  "ticket/getTicketRoom",
  async (maLichChieu: number) => {
    try {
      const data = await ticketAPI.getTicketRoom(maLichChieu);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const createShowtime = createAsyncThunk(
  "ticket/createShowtime",
  async (lich: ShowtimeNew) => {
    try {
      const data = await ticketAPI.createShowtime(lich);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getTheaterSystem = createAsyncThunk(
  "ticket/getTheaterSystem",
  async (maHeThongRap: string) => {
    try {
      const data = await ticketAPI.getTheaterSystem(maHeThongRap);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getTheaterSystemList = createAsyncThunk(
  "ticket/getTheaterSystemList",
  async () => {
    try {
      const data = await ticketAPI.getTheaterSystemList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getTheaterZoneList = createAsyncThunk(
  "ticket/getTheaterZoneList",
  async (maHeThongRap: string) => {
    try {
      const data = await ticketAPI.getTheaterZoneList(maHeThongRap);

      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getTheaterList = createAsyncThunk(
  "ticket/getTheaterList",
  async (maHeThongRap: string) => {
    try {
      const data = await ticketAPI.getTheaterList(maHeThongRap);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getShowtimeList = createAsyncThunk(
  "ticket/getShowtimeList",
  async (maHeThongRap: string) => {
    try {
      const data = await ticketAPI.getShowtimeList(maHeThongRap);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTheaterSystem: (state, action: PayloadAction<TheaterSystem>) => {
      state.currentTheaterSystem = action.payload;
    },
    setTheaterList: (state, action: PayloadAction<Theater[]>) => {
      state.theaterList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTheaterSystemList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTheaterSystemList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.theaterSystemList = payload;
    });
    builder.addCase(getTheaterSystemList.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
    builder.addCase(getTheaterZoneList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.theaterZoneList = payload;
    });
  },
});

// export actions
export const { setTheaterSystem, setTheaterList } = ticketSlice.actions;

// export reducer
export default ticketSlice.reducer;
