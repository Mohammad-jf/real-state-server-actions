import AdminCard from "../modules/AdminCard";
import styles from "./adminPage.module.css";

const AdminPage = ({ data }) => {
  return (
    <div>
      {data.length ? null : (
        <p className={styles.text}>هیچ اگهی در انتظار تایید وجود ندارد</p>
      )}

      {data.map((item) => (
        <AdminCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default AdminPage;
