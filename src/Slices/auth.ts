import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User, Login } from "Interface/user";
import { Auth } from "Interface/auth";

import userAPI from "Services/userAPI";
import { object } from "yup";
interface State {
  auth: Auth;
}

const initialState: State = {
  auth: {
    accessToken: "",
    email: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    maNhom: "GP01",
    soDT: "",
    taiKhoan: "",
  },
};
export const login = createAsyncThunk("user/login", async (ndDN: Login) => {
  try {
    const data = await userAPI.login(ndDN);
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      localStorage.setItem("access_token", payload.accessToken);
      localStorage.setItem("auth", JSON.stringify(payload));
      state.auth = payload;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      console.log(error);
    });
  },
});
export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
