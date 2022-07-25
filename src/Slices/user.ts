import movieAPI from "Services/movieAPI";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "Interface/user";
import userAPI from "Services/userAPI";

interface State {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  users: [],
  isLoading: false,
  error: null,
};

// thunk actions
export const getUserList = createAsyncThunk("user/getUserList", async () => {
  try {
    const data = await userAPI.getUserList();
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
});

export const getUser = createAsyncThunk(
  "user/getUser",
  async (keyword: string) => {
    try {
      const data = await userAPI.getUser(keyword);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// export const addNewMovie = createAsyncThunk("movie/addNewMovie", async () => {
//   try {
//     // const data = await movieAPI.addNewMovie();
//     // return data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const updateMovie = createAsyncThunk("movie/updateMovie", async () => {
//   try {
//     // const data = await movieAPI.updateMovie();
//     // return data;
//   } catch (error) {
//     throw error;
//   }
// });

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (taiKhoan: string) => {
    try {
      const data = await userAPI.deleteUser(taiKhoan);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tmp: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    });
    builder.addCase(getUserList.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions
export const { tmp } = userSlice.actions;

// export reducer
export default userSlice.reducer;
