import userData from "../json/task1.json";
import Profile from "./task1/Profile/Profile";

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
    </>
  );
}
