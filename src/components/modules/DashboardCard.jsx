"use client";
import styles from "./dashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import deleteProfile from "src/actions/deleteProfile";
import { toast, Toaster } from "react-hot-toast";

const DashboardCard = ({ profile }) => {
  const router = useRouter();
  const editHandler = async () => {
    router.push(`/dashboard/my-profiles/${profile._id}`);
  };
  const deleteHandler = async () => {
    const res = await deleteProfile(profile._id);
    if (res.error) {
      toast.error(res.error);
    } else if (res.message) {
      toast.success(res.message);
    }
  };

  return (
    <div className={styles.container}>
      <Card data={profile} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
