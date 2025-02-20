import Card from "../modules/Card";
import SideBar from "../modules/Sidebar";
import styles from "./buyResidential.module.css";

const BuyResidentialPage = ({ profiles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        {profiles.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}

        {profiles.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
