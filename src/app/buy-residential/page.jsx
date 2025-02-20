import toast from "react-hot-toast";
import getProfiles from "src/actions/getProfiles";
import BuyResidentialPage from "src/components/templates/BuyResidentialPage";

const BuyResidential = async ({ searchParams }) => {
  const res = await getProfiles();
  const { category } = await searchParams;
  if (res.error) {
    return <h3>مشکلی پیش امده است</h3>;
  }

  let profiles = res?.data;

  if (category) {
    profiles = profiles.filter((item) => item.category === category);
  }

  return <BuyResidentialPage profiles={profiles} />;
};

export default BuyResidential;
