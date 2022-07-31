import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import Movies from "Pages/Movies";
import Showtime from "Pages/Showtime";
import AddShowtime from "Pages/AddShowtime";
import AddMovie from "Pages/AddMovie";
import Login from "Pages/Login";

import HomeTemplate from "Templates/HomeTemplate";
import MovieTemplate from "Templates/MovieTemplate";
import UserTemplate from "Templates/UserTemplate";
import AddUser from "Pages/AddUser";
import Profile from "Pages/Profile";
import ProtectedRoute from "Routes/ProtectedRoute";
function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="" element={<ProtectedRoute children={<HomeTemplate />} />}>
          <Route path="profile" element={<Profile />} />

          <Route path="user" element={<UserTemplate />}>
            <Route index element={<Users />} />
            <Route path="add" element={<AddUser />} />
          </Route>
          <Route path="movie" element={<MovieTemplate />}>
            <Route index element={<Movies />} />
            <Route path="add" element={<AddMovie />} />
            <Route path="showtime/:movieId" element={<AddShowtime />} />
          </Route>

          <Route path="showtime" element={<Showtime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//tsrfc: React.FC
//<TenComponent />: React.ReactElement
