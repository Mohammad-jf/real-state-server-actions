"use server";
import User from "@/models/User";
const { hashPassword } = require("@/utils/auth");
import { redirect } from "next/navigation";

const signup = async (formData) => {
  try {
    await connectDB();
    const email = formData.get("email");
    const password = formData.get("password");
    const repassword = formData.get("rePassword");
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
      return { error: "کاربری با این ایمیل وجود دارد" };
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ email, password: hashedPassword });
    if (user) {
      redirect("/signin");
    }
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default signup;
