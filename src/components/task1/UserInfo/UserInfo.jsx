import style from "./UserInfo.module.css";

const UserInfo = ({ name, tag, location }) => {
  return (
    <>
      <p className={style.userName}>{name}</p>
      <p className={style.userTag}>@{tag}</p>
      <p className={style.userLocation}>{location}</p>
    </>
  );
};

export default UserInfo;
