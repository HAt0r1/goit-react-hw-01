import FriendsListItem from "../FriendListItem/FriendListItem";
import friends from "../../../json/task2.json";

import style from "./FriendsList.module.css";

const FriendsList = () => {
  return (
    <ul className={style.friendsList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

export default FriendsList;
