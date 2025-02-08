import DashboardCard from "../modules/DashboardCard";
import styles from "./myProfiles.module.css";

const MyProfilesPage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیج آگهی ای ثبت نشده است</p>
      )}

      {profiles.map((profile) => (
        <DashboardCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default MyProfilesPage;
