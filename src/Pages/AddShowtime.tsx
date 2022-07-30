import React from "react";
import AddShowtimeForm from "../Components/AddShowtimeForm";
import { useParams } from "react-router-dom";

type Props = {};

const AddShowtime = (props: Props) => {
  const { movieId } = useParams();

  return (
    <div style={{ width: "80%" }}>
      <AddShowtimeForm />
    </div>
  );
};

export default AddShowtime;
