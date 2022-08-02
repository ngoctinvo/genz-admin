import React from "react";
import CreateShowtimeForm from "Components/Add/Showtime/CreateShowtimeForm";

type Props = {};

const Showtime = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <CreateShowtimeForm />
    </div>
  );
};

export default Showtime;
