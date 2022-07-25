import React from "react";
import AddShowtimeForm from "../Components/AddShowtimeForm";
import { useParams } from "react-router-dom";

type Props = {};

const AddShowtime = (props: Props) => {
  const { movieId } = useParams();

  return <AddShowtimeForm />;
};

export default AddShowtime;
