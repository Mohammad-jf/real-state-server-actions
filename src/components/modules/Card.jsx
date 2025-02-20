import { icons } from "src/constant/icon";
import styles from "./card.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utils/replacenumber";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const Card = ({ data: { category, title, location, price, _id } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>

      <span>{sp(price) + " "} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
};

export default Card;
