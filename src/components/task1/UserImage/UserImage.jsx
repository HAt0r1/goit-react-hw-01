import style from "./UserImage.module.css";

const UserImage = ({ image }) => {
  return <img className={style.image} src={image} alt="User Avatar" />;
};

export default UserImage;
