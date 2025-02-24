"use server";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

async function getProfiles() {
  await connectDB();
  const profiles = await Profile.find({ published: true }).select("-userId");
  if (profiles) {
    return { data: profiles };
  } else {
    return { error: "خطایی رخ داده است" };
  }
}

export default getProfiles;
