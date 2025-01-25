"use client";
import styles from "./signup.module.css";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const router = useRouter();
  const [formD, setFormD] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);

  const changeHandler = (e) => {
    setFormD({
      ...formD,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!formD.email || !formD.password) {
      toast.error("اطلاعات را به درستی وارد کنید");
      setloading(false);
      return;
    }

    const res = await signIn("credentials", {
      email: formD.email,
      password: formD.password,
      redirect: false,
    });

    if (!res.error) {
      setloading(false);
      router.replace("/");
    } else {
      setloading(false);
      toast.error(res.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>ورود به حساب</h4>
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

        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dotss-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button onClick={submitHandler}>ورود</button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SigninPage;
