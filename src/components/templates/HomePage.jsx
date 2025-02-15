import { FiCircle } from "react-icons/fi";
import styles from "./homePage.module.css";
import CategoryCard from "../modules/CategoryCard";
import { FaCity } from "react-icons/fa";

const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "مشهد",
    "اصفهان",
    "شیراز",
    "تبریز",
    "اهواز",
    "کرج",
    "تبریز",
  ];

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item, index) => (
              <li key={index}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>

      <div className={styles.city}>
        <h3>شهرهای پربازدید</h3>
        <ul>
          {cities.map((item, index) => (
            <li key={index}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
