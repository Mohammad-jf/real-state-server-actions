import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import MyProfilesPage from "src/components/templates/MyProfilesPage";

const MyProfiles = async () => {
  const session = await getServerSession(authOptions);
  await connectDB();
  const [user] = await User.aggregate([
    { $match: { email: session?.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  return <MyProfilesPage profiles={user.profiles} />;
};

export default MyProfiles;
