"use client";

import { signOut } from "next-auth/react";
import Styles from "./logoutButton.module.css";
import { FiLogOut } from "react-icons/fi";
const LogoutButton = () => {
  return (
    <button className={Styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutButton;
