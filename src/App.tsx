import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import Movies from "Pages/Movies";
import Showtime from "Pages/Showtime";
import AddMovie from "Pages/AddMovie";
import HomeTemplate from "Templates/HomeTemplate";

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Users />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/add" element={<AddMovie />} />

          <Route path="showtime" element={<Showtime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//tsrfc: React.FC
//<TenComponent />: React.ReactElement
