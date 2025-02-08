"use client";
import signup from "src/actions/signup";
import styles from "./signup.module.css";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../modules/Loader";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [loading, setloading] = useState(false);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    setloading(true);
    if (!formData.email || !formData.password || !formData.rePassword) {
      toast.error("اطلاعات را به درستی وارد کنید");
      setloading(false);
      return;
    }
    if (formData.password !== formData.rePassword) {
      toast.error("عدم تطابق گذرواژه ها");
      setloading(false);
      return;
    }

    const res = await signup(formData);
    if (res?.error) {
      toast.error(res.error);
      setloading(false);
    }

    setloading(false);
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل</label>
        <input
          type="text"
          value={formData.email}
          name="email"
          id="email"
          onChange={changeHandler}
        />
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          value={formData.password}
          name="password"
          id="password"
          onChange={changeHandler}
        />
        <label htmlFor="rePassword">تکرار رمز عبور</label>
        <input
          type="password"
          value={formData.rePassword}
          name="rePassword"
          id="rePassword"
          onChange={changeHandler}
        />
        {loading ? (
          <Loader />
        ) : (
          <button onClick={submitHandler}>ایجاد حساب</button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignupPage;
