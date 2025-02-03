"use client";

import { useState } from "react";
import styles from "./addPage.module.css";
import TextInput from "../modules/TextInput";

const AddPage = () => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = async () => {};
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="title"
        title="عنوان آگهی"
      />
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="description"
        title="توضیحات"
        textarea={true}
      />
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="location"
        title="آدرس"
      />
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="phone"
        title="شماره همراه"
      />
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="price"
        title="قیمت(تومان)"
      />
      <TextInput
        profileData={profileData}
        setProfileData={setProfileData}
        name="realState"
        title="بنگاه"
      />

      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
};

export default AddPage;
