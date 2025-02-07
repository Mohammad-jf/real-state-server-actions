"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

async function createProfile(profileData) {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return { error: "لطفا وارد حساب خود شوید" };
  }
  
  await connectDB();

  const {
    title,
    description,
    location,
    phoneNumber,
    price,
    realState,
    constructionDate,
    category,
    rules,
    amenities,
  } = profileData;

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return { error: "کاربری با این نام وجود ندارد" };
  }

  if (
    !title ||
    !description ||
    !location ||
    !phoneNumber ||
    !price ||
    !realState ||
    !constructionDate ||
    !category
  ) {
    return { error: "ا طلاعات را به درستی وارد کنید" };
  }

  const newProfile = await Profile.create({
    userId: new Types.ObjectId(user._id),
    title,
    description,
    location,
    phoneNumber,
    price: Number(price),
    realState,
    constructionDate,
    category,
    rules,
    amenities,
  });

  if (newProfile) {
    return { message: "آگهی با موفقیت ثبت شد" };
  }

  revalidatePath("/", "layout");
}

export default createProfile;
