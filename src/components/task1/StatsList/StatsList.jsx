import style from "./StatsList.module.css";

const StatsList = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={style.statsList}>
      <li className={style.listItem}>
        <span>Followers</span>
        <span className={style.statsInfo}>{followers}</span>
      </li>
      <li className={style.listItem}>
        <span>Views</span>
        <span className={style.statsInfo}>{views}</span>
      </li>
      <li className={style.listItem}>
        <span>Likes</span>
        <span className={style.statsInfo}>{likes}</span>
      </li>
    </ul>
  );
};

export default StatsList;
