import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import ProfileDetailsPage from "src/components/templates/ProfileDetailsPage";

const ProfileDetail = async ({ params }) => {
  await connectDB();
  const { profileId } = await params;
  const profile = await Profile.findOne({ _id: profileId });

  return <ProfileDetailsPage data={profile} />;
};

export default ProfileDetail;
