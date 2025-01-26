import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignupPage from "src/components/templates/SignupPage";

const Signup = async () => {
  const session = await getServerSession(authOptions);
  if (session || session?.user) redirect("/signin");
  return <SignupPage />;
};

export default Signup;
