"use client";
import { useState } from "react";
import styles from "./addPage.module.css";
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";
import TextList from "../modules/TextList";
import CustomDatePicker from "../modules/CustomDatePicker";
import { toast, Toaster } from "react-hot-toast";
import createProfile from "src/actions/createProfile";
import Loader from "../modules/Loader";
import editProfile from "src/actions/editProfile";

const AddPage = ({ data }) => {
  const [profileData, setProfileData] = useState(
    data
      ? { ...data }
      : {
          title: "",
          description: "",
          location: "",
          phoneNumber: "",
          price: "",
          realState: "",
          constructionDate: new Date(),
          category: "",
          rules: [],
          amenities: [],
        }
  );

  const [loading, setloading] = useState(false);

  const submitHandler = async () => {
    setloading(true);
    const res = await createProfile(profileData);
    if (res.error) {
      toast.error(res.error);
      setloading(false);
    } else if (res.message) {
      toast.success(res.message);
      setloading(false);
    }

    setProfileData({
      title: "",
      description: "",
      location: "",
      phoneNumber: "",
      price: "",
      realState: "",
      constructionDate: new Date(),
      category: "",
      rules: [],
      amenities: [],
    });
  };

  const editHandler = async () => {
    setloading(true);
    const res = await editProfile({ ...profileData });
    if (res.error) {
      toast.error(res.error);
      setloading(false);
    } else if (res.message) {
      toast.success(res.message);
      setloading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
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
        name="phoneNumber"
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

      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />

      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
      <Toaster />
    </div>
  );
};

export default AddPage;
