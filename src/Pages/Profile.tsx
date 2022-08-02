import ProfileForm from "Components/ProfileForm";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="w-full lg:w-9/12 py-10">
      <ProfileForm />
    </div>
  );
};

export default Profile;
