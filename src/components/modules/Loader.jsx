
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      color="#304ffe"
      height={45}
      ariaLabel="three-dotss-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};

export default Loader;
