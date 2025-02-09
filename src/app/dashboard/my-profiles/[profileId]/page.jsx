import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";
import AddPage from "src/components/templates/AddPage";

const EditProfile = async ({ params }) => {
  const { profileId } = await params;

  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) {
    return <h3>لطفا دوباره امتحان کنید</h3>;
  }

  return <AddPage data={JSON.parse(JSON.stringify(profile))} />;
};

export default EditProfile;
