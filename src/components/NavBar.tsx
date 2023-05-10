import { Link } from "react-router-dom";
import { API_URL } from "../utils/useAxios.ts";
import { useContext } from "react";
import AppContext from "../utils/AppContext.tsx";

export function NavBar() {
  const { user, userInfo, logoutUser } = useContext(AppContext);
  return (
    <ul className="menu rounded-box outline outline-1 outline-accent bg-primary">
      {user ? (
        <li>
          <div>
            <img
              src={API_URL + userInfo?.avatar}
              alt=""
              className="rounded-full"
            />
            <span>{userInfo?.username}</span>
          </div>
          <ul className="z-2">
            <li>
              <Link to={`/user/${user?.id}`} key={user?.id} className="btn rounded-t-2xl">
                Моя страница
              </Link>
            </li>
            <li>
              <button className="btn rounded-b-2xl" onClick={logoutUser}>
                Выйти
              </button>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <Link to={"login"}>Войти</Link>
        </li>
      )}
      <li></li>
      <li>
        <Link to={"/"}>Новости</Link>
      </li>
      <li>
        <Link to={"friends"}>Друзья</Link>
      </li>
      <li>
        <Link to={"/"}>Сообщения</Link>
      </li>
      <li>
        <Link to={"/"}>Сообщества</Link>
      </li>
      <li>
        <Link to={"/"}>Звонки</Link>
      </li>
      <li>
        <Link to={"/"}>Музыка</Link>
      </li>
      <li>
        <Link to={"/"}>Игры</Link>
      </li>
    </ul>
  );
}
