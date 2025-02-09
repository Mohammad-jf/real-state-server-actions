"use client";
import styles from "./dashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

const DashboardCard = ({ profile }) => {
  const router = useRouter();
  const editHandler = async () => {
    router.push(`/dashboard/my-profiles/${profile._id}`);
  };
  const deleteHandler = async () => {};

  return (
    <div className={styles.container}>
      <Card data={profile} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button>
          حذف آگهی
          <AiOutlineDelete onClick={deleteHandler} />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
