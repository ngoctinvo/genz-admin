import React from "react";
import AddMovieForm from "../Components/AddMovieForm";

type Props = {};

const AddMovie = (props: Props) => {
  return (
    <div style={{ width: "80%" }}>
      <AddMovieForm />
    </div>
  );
};

export default AddMovie;
