import userData from "../json/task1.json";
import Profile from "./task1/Profile/Profile";
import FriendsList from "./task2/FriendsList/FriendsList";

import style from "./App.module.css";

export default function App() {
  return (
    <>
      <h1 className={style.title}>Task №1</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h1 className={style.title}>Task №2</h1>
      <FriendsList />
      <h1 className={style.title}>Task №3</h1>
    </>
  );
}
