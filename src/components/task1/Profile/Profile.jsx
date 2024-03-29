import UserImage from "../UserImage/UserImage";
import UserInfo from "../UserInfo/UserInfo";
import StatsList from "../StatsList/StatsList";

import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <UserImage image={image} />
        <UserInfo name={name} tag={tag} location={location} />
      </div>
      <StatsList stats={stats} />
    </div>
  );
};

export default Profile;
