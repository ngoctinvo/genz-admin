import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Movie from "Interface/movie";
import movieAPI from "../Services/movieAPI";

interface State {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  movies: [],
  isLoading: false,
  error: null,
};

// thunk actions
export const getMovieList = createAsyncThunk("movie/getMovieList", async () => {
  try {
    console.log("thunk action get move lsit)");
    const data = await movieAPI.getMovieList();
    console.log("data");

    return data;
  } catch (error) {
    throw error;
  }
});
export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (name: string) => {
    try {
      console.log("thunk action get move lsit)");
      const data = await movieAPI.getMovie(name);
      console.log("data");

      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const addNewMovie = createAsyncThunk(
  "movie/addNewMovie",
  async (movie: any) => {
    try {
      const data = await movieAPI.addNewMovie(movie);
      console.log("add new thanh cong");
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async (movie: any) => {
    try {
      const data = await movieAPI.updateMovie(movie);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteMovie = createAsyncThunk("movie/deleteMovie", async () => {
  try {
    const data = await movieAPI.deleteMovie();
    return data;
  } catch (error) {
    throw error;
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    tmp: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(getMovieList.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions
export const { tmp } = movieSlice.actions;

// export reducer
export default movieSlice.reducer;
