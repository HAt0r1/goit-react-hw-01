import FriendsListItem from "../FriendListItem/FriendListItem";

import style from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      <FriendsListItem data={friends} />
    </ul>
  );
};

export default FriendsList;
