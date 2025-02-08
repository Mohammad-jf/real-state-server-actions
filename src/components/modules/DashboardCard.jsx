import Card from "./Card";
import styles from "./dashboardCard.module.css";

const DashboardCard = ({ profile }) => {
  return (
    <div className={styles.container}>
      <Card data={profile} />
    </div>
  );
};

export default DashboardCard;
