import { p2e } from "@/utils/replacenumber";
import styles from "./textInput.module.css";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const changeHandler = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: p2e(e.target.value),
    });
  };

  return (
    <div className={styles.container}>
      <p>{title }</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
