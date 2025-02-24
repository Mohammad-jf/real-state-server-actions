import React from "react";
import styles from "./dashboard.module.css";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "../modules/LogoutButton";

const DashboardSidebar = async ({ children, user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {user.role === "ADMIN" ? <p>{user.role}</p> : null}
        <p>{user?.email}</p>
        <p>{}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {user.role === "ADMIN" ? (
          <Link href="/admin">در انتظار تایید</Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
