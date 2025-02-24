import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "src/components/templates/AdminPage";
import Profile from "@/models/Profile";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session?.user?.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const data = await Profile.find({ published: false });
  return (
    <DashboardSidebar user={user}>
      <AdminPage data={data} />
    </DashboardSidebar>
  );
};

export default Admin;
