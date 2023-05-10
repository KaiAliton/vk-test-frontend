import { Link } from "react-router-dom";
import { IPostProps } from "../models/IPost.ts";
import useAxios from "../utils/useAxios.ts";
import { useState } from "react";

export function PostCard(props: IPostProps) {
  const api = useAxios();
  const [likes, setLikes] = useState<number>(props.post.likes_count);
  const like_post = () => {
    api
      .post(`/api/v1/post/${props.post.id}/like/`)
      .then((res) => setLikes(res.data["likes_count"]));
  };
  return (
    <div
      className={
        "bg-primary p-5 rounded-2xl outline outline-1 outline-accent mb-5 flex gap-2 flex-col w-full"
      }
    >
      <div className={"flex flex-row gap-2 items-center"}>
        <img
          src={`${props.post?.author.avatar}`}
          className={"rounded-full w-10"}
        />
        <div className="flex flex-col">
        <Link to={`/user/${props.post?.author.id}`}>
          {props.post?.author.username}
        </Link>
        <span className="text-xs text-base-content/70">{props.post.created}</span>
        </div>

        
      </div>
      <div className={"flex flex-col gap-2"}>
        <span className={"text-start"}>{props.post.body}</span>
        {props.post.cover ? (
          <img src={`${props.post?.cover}`} />
        ) : null}
        <button className={"btn btn-sm btn-accent w-fit"} onClick={like_post}>
          Лайков: {likes}
        </button>
      </div>
    </div>
  );
}
