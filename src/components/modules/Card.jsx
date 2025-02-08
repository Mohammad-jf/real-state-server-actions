import { icons } from "src/constant/icon";
import styles from "./card.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Card = ({ data: { category, title, location, price } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>

      <span>{price + " "} تومان</span>
    </div>
  );
};

export default Card;
