import { Link } from "react-router-dom";
import { IUserProps } from "../models/IUser.ts";
import useAxios from "../utils/useAxios.ts";

export function FriendCard(props: IUserProps) {
  const api = useAxios();

  const add_friend = async () => {
    await api.post(`/api/v1/user/${props.user?.id}/add_friend/`);
    location.reload();
  };
  return (
    <div>
      <div className={"flex flex-row items-center p-2"}>
        {props.user?.avatar ? (
          <img
            src={`${props.user?.avatar}`}
            className={"rounded-full w-20 p-2"}
          />
        ) : (
          <div className="w-20 h-20 p-2">
            <div className="bg-accent rounded-full w-full h-full"></div>
          </div>
        )}
        <Link to={`/user/${props.user?.id}`} className={"grow text-start"}>
          {props.user?.username}
        </Link>
        <button className={"btn-sm btn-accent rounded-xl"} onClick={add_friend}>
          {props.user?.isFriend ? "Удалить из друзей" : "Добавить в друзья"}
        </button>
      </div>
    </div>
  );
}
