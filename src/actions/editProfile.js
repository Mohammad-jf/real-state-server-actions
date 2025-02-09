"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

async function editProfile(profileData) {
  await connectDB();
  const {
    _id,
    title,
    description,
    location,
    phoneNumber,
    realState,
    price,
    constructionDate,
    amenities,
    rules,
    category,
  } = profileData;

  console.log(_id);
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    return { error: "لطفا وارد حساب کاربری خود شوید" };
  }

  const user = await User.findOne({ email: session?.user.email });
  if (!user) {
    return { error: "کاربری با این نام وجود ندارد" };
  }

  if (
    !_id ||
    !title ||
    !description ||
    !location ||
    !phoneNumber ||
    !realState ||
    !price ||
    !constructionDate ||
    !category
  ) {
    return { error: "لطفا اطلاعات را به درستی وارد کنید" };
  }

  const profile = await Profile.findOne({ _id });
  if (!user._id.equals(profile.userId)) {
    return { error: "دسترسی شما به این آگهی محدود شده است" };
  }

  profile.title = title;
  profile.description = description;
  profile.location = location;
  profile.phoneNumber = phoneNumber;
  profile.realState = realState;
  profile.price = price;
  profile.constructionDate = constructionDate;
  profile.amenities = amenities;
  profile.rules = rules;
  profile.category = category;

  await profile.save();

  revalidatePath("/dashboard/my-profiles", "page");
  return { message: "تغییرات با موفقیت اعمال شد" };
}

export default editProfile;
