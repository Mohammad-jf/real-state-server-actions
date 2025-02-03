import { getServerSession } from "next-auth";
import Styles from "./dashboardPage.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user.email });

  return (
    <div className={Styles.container}>
      <h3>سلام</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={Styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
