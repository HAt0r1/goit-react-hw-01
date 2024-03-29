import style from "./FriendImage.module.css";

const FriendImage = ({ avatar }) => {
  return <img className={style.avatar} src={avatar} alt="Avatar" />;
};

export default FriendImage;
