"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

async function publishProfile(id) {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    return { error: "لطفا وارد حساب کاربری خود شوید" };
  }

  const user = await User.findOne({ email: session?.user.email });
  if (!user) {
    return { error: "کاربری با این نام وجود ندارد" };
  }

  const profile = await Profile.findOne({ _id: id });
  if (!user._id.equals(profile.userId)) {
    return { error: "دسترسی شما به این آگهی محدود شده است" };
  }

  profile.published = true;
  await profile.save();

  revalidatePath("/admin", "page");
  return { message: "تغییرات با موفقیت اعمال شد" };
}

export default publishProfile;
