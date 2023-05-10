import { Link } from "react-router-dom";
import { IUserProps } from "../models/IUser.ts";

export function UserCard(props: IUserProps) {
  return (
    <div>
      <div className={"flex flex-row items-center"}>
        <img
          src={`${props.user?.avatar}`}
          className={"rounded-full w-20 p-2"}
        />
        <Link to={`/user/${props.user?.id}`}>{props.user?.username}</Link>
      </div>
    </div>
  );
}
