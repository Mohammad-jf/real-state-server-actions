"use client";
import signup from "src/actions/signup";
import styles from "./signup.module.css";
import { useState } from "react";

const SignupPage = () => {
  const [formD, setFormD] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const changeHandler = (e) => {
    setFormD({
      ...formD,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل</label>
        <input
          type="text"
          value={formD.email}
          name="email"
          id="email"
          onChange={changeHandler}
        />
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          value={formD.password}
          name="password"
          id="password"
          onChange={changeHandler}
        />
        <label htmlFor="rePassword">تکرار رمز عبور</label>
        <input
          type="password"
          value={formD.rePassword}
          name="rePassword"
          id="rePassword"
          onChange={changeHandler}
        />
      </form>
      <button type="submit">ایجاد حساب</button>
    </div>
  );
};

export default SignupPage;
