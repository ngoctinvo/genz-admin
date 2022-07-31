import movieAPI from "Services/movieAPI";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UserType, Login } from "Interface/user";
import userAPI from "Services/userAPI";

interface State {
  users: User[];
  isLoading: boolean;
  error: string | null;
  userTypeList: UserType[];
}

const initialState: State = {
  users: [],
  isLoading: false,
  error: null,
  userTypeList: [],
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
  },
});

// export actions
export const { tmp } = userSlice.actions;

// export reducer
export default userSlice.reducer;
