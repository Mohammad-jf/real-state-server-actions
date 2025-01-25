"use server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import { redirect } from "next/navigation";

async function signUp(formData) {
  await connectDB();
  const email = formData.email;
  const password = formData.password;
  const repassword = formData.rePassword;
  if (!email || !password || !repassword) {
    // throw new Error("invalid credentials");
    return { error: "اطلاعات را به درستی وارد کنید" };
  }

  if (repassword !== password) {
    // throw new Error("password dont match");
    return { error: "عدم تطابق گذرواژه ها" };
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    // throw new Error("user already exist");
    return { error: "کاربری بااین ایمیل وجود دارد" };
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({ email, password: hashedPassword });
  if (user) {
    redirect("/signin");
  }
}

export default signUp;
