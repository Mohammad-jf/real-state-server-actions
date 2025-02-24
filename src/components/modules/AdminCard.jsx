"use client";
import { sp } from "@/utils/replacenumber";
import styles from "./adminCard.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import deleteProfile from "src/actions/deleteProfile";
import publishProfile from "src/actions/publishProfile";

const AdminCard = ({ data }) => {
  const router = useRouter();

  const deleteHandler = async (id) => {
    const res = await deleteProfile(id);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
    }
    router.refresh();
  };

  const publishHandler = async (id) => {
    const res = await publishProfile(id);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
    }
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}</span>
      </div>

      <button onClick={() => publishHandler(data._id)}>انتشار</button>
      <button
        onClick={() => deleteHandler(data._id)}
        style={{ marginRight: "10px", backGroundColor: "red" }}
      >
        حذف
      </button>

      <Toaster />
    </div>
  );
};

export default AdminCard;
