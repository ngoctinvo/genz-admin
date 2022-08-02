import React from "react";
import AddMovieForm from "../Components/Add/Movie/AddMovieForm";

type Props = {};

const AddMovie = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <AddMovieForm />
    </div>
  );
};

export default AddMovie;
