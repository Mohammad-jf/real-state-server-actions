"use client";
import signup from "src/actions/signup";
import styles from "./signup.module.css";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const SignupPage = () => {
  const [formD, setFormD] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [loading, setloading] = useState(false);

  const changeHandler = (e) => {
    setFormD({
      ...formD,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (formData) => {
    setloading(true);
    if (!formD.email || !formD.password || !formD.rePassword) {
      toast.error("اطلاعات را به درستی وارد کنید");
      setloading(false);
      return;
    }
    if (formD.password !== formD.rePassword) {
      toast.error("عدم تطابق گذرواژه ها");
      setloading(false);
      return;
    }

    const res = await signup(formData);
    if (res?.error) {
      toast.error(res.error);
      setloading(false);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form action={submitHandler} method="POST">
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
        {loading ? (
          <ThreeDots
            ariaLabel="three-dots-loading"
            visible={true}
            color="#304ffe"
            height={45}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit">ایجاد حساب</button>
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
