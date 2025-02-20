import Link from "next/link";
import styles from "./sidebar.module.css";
import { HiFilter } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>

      <Link href="/buy-residential">همه</Link>
      <Link
        href={{ pathname: "/buy-residential", query: { category: "villa" } }}
      >
        ویلا
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "apartment" },
        }}
      >
        آپارتمان
      </Link>
      <Link
        href={{ pathname: "/buy-residential", query: { category: "store" } }}
      >
        مغازه
      </Link>
      <Link
        href={{ pathname: "/buy-residential", query: { category: "office" } }}
      >
        دفتر
      </Link>
    </div>
  );
};

export default SideBar;
