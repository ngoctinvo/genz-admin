import MovieList from "../Components/List/Movie/MovieList";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
type Props = {};

const Movies = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <Button radius="sm" variant="outline" color="pink" className="mb-10">
        <NavLink to="/movie/add">Thêm phim </NavLink>
      </Button>
      <MovieList />
    </div>
  );
};

export default Movies;
