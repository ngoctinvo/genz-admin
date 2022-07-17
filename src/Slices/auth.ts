import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // user: {
  //   taiKhoan: "dannguyen",
  //   email: "dan@gmail.com",
  // },
  user: null,
};

// Viết actions login và register
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    // const data = await authAPI.login(values)
    const data = { name: "aaa" };
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, {payload}) => {
      // state.user = payload
    })
  }
});

export default authSlice.reducer;
