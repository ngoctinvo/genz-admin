import React from "react";
import AddShowtimeForm from "../Components/Add/Showtime/AddShowtimeForm";
import { useParams } from "react-router-dom";

type Props = {};

const AddShowtime = (props: Props) => {
  const { movieId } = useParams();

  return (
    <div className="w-full lg:w-9/12 py-10">
      <AddShowtimeForm />
    </div>
  );
};

export default AddShowtime;
