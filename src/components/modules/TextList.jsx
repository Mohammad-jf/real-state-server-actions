import styles from "./textlist.module.css";

const TextList = ({ title, profileData, setProfileData, type }) => {
  const addHandler = (e) => {
    setProfileData({
      ...profileData,
      [type]: [...profileData[type], ""],
    });
  };

  const changeHandler = (e, index) => {
    const list = [...profileData[type]];
    list[index] = e.target.value;
    setProfileData({
      ...profileData,
      [type]: list,
    });
  };

  const deleteHandler = (index) => {
    const list = profileData[type].filter(
      (item) => item !== profileData[type][index]
    );

    setProfileData({
      ...profileData,
      [type]: list,
    });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type]?.map((i, index) => (
        <div key={index} className={styles.card}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>حذف</button>
        </div>
      ))}
      <button onClick={addHandler}>افزودن</button>
    </div>
  );
};

export default TextList;
