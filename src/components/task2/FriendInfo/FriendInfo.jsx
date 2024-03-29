import clsx from "clsx";
import style from "./FriendInfo.module.css";

const FriendInfo = ({ name, isOnline }) => {
  const status = clsx(
    style["friendStatus"],
    isOnline ? style["online"] : style["offline"]
  );
  return (
    <>
      <p className={style.name}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
};

export default FriendInfo;
