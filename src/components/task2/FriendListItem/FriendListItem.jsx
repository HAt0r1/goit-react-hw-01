import FriendImage from "../FriendImage/FriendImage";
import FriendInfo from "../FriendInfo/FriendInfo";

import style from "./FriendListItem.module.css";

const FriendsListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={style.listItem} key={id}>
            <div className={style.friendContainer}>
              <FriendImage avatar={avatar} />
              <FriendInfo name={name} isOnline={isOnline} />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default FriendsListItem;
