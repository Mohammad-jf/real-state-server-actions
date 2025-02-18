import NextAuth from "next-auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
          const { email, password } = credentials;

          if (!email || !password) {
            throw new Error("لطفا اطلاعات معتبر وارد کنید");
          }

          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("لطفا ابتدا حساب کابری ایجاد کنید");
          }

          const isValid = await verifyPassword(password, user.password);

          if (!isValid) {
            throw new Error("ایمیل یا رمز عبور اشتباه است");
          }

          return { email };
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
