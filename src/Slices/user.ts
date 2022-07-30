import movieAPI from "Services/movieAPI";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UserType, Login } from "Interface/user";
import userAPI from "Services/userAPI";

interface State {
  users: User[];
  isLoading: boolean;
  error: string | null;
  userTypeList: UserType[];
  auth: User;
}

const initialState: State = {
  users: [],
  isLoading: false,
  error: null,
  userTypeList: [],
  auth: {
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maLoaiNguoiDung: "QuanTri",
  },
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (nd: User) => {
    try {
      const data = await userAPI.updateUser(nd);
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

export const addNewUser = createAsyncThunk(
  "user/addNewUser",
  async (nd: User) => {
    try {
      const data = await userAPI.addNewUser(nd);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getUserTypeList = createAsyncThunk(
  "user/getUserTypeList",
  async () => {
    try {
      const data = await userAPI.getUserTypeList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const login = createAsyncThunk("user/login", async (ndDN: Login) => {
  try {
    const data = await userAPI.login(ndDN);
    return data;
  } catch (error) {
    throw error;
  }
});

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
    builder.addCase(getUserTypeList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      // state.userTypeList = payload;
      console.log("type list - ", payload);
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.auth = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.auth = payload;
    });
  },
});

// export actions
export const { tmp } = userSlice.actions;

// export reducer
export default userSlice.reducer;
