import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SigninPage from "src/components/templates/SigninPage";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if (session || session?.user) redirect("/");
  return <SigninPage />;
};

export default Signin;
