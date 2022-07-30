import MovieList from "../Components/MovieList";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
type Props = {};

const Movies = (props: Props) => {
  return (
    <div style={{ width: "80%" }}>
      <Button variant="outline" color="cyan" radius="md">
        <NavLink to="/movie/add">Thêm phim </NavLink>
      </Button>
      <MovieList />
    </div>
  );
};

export default Movies;
