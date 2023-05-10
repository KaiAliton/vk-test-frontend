import { useState, useEffect, useContext } from "react";
import ResponseGrid from "../layouts/ResponseGrid";
import { PostCard } from "../components/PostCard";
import { useParams } from "react-router-dom";
import TextWrapper from "../components/TextWrapper";
import AddPostPanel from "../components/AddPostPanel";
import useAxios from "../utils/useAxios";
import AppContext from "../utils/AppContext.tsx";
import { IPost } from "../models/IPost.ts";
import { IUser, IUserList } from "../models/IUser.ts";
import { UserCard } from "../components/UserCard.tsx";

function Profile() {
  const { user } = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState<IUser | null>(null);
  const [friends, setFriends] = useState<IUserList>([]);
  const [loading, setLoading] = useState(true);
  const [isFriend, setIsFriend] = useState<boolean | null>();
  const params = useParams();
  const profileId = params.id;
  const api = useAxios();

  useEffect(() => {
    api.get(`/api/v1/user/${profileId}/overview/`).then((res) => {
      setPosts(res.data["posts"]);
      setProfile(res.data["user"]);
      setFriends(res.data["friends"]);
      setIsFriend(res.data['user'].isFriend);
      setLoading(false);
    });
  }, [profileId]);

  const add_friend = () => {
    api
      .post(`/api/v1/user/${profile?.id}/add_friend/`)
      .then((res) => {
        setIsFriend(res.data['user'].isFriend);
      }); //location.reload())
  };

  return (
    <>
      <div className="profile-card my-5 card w-full shadow-lg items-center bg-primary h-96">
        {loading ? (
          <div className="w-full rounded-xl h-full bg-accent"></div>
        ) : (
          <figure>
            <img
              src="https://loremflickr.com/3440/1440?random=1"
              className=" "
              alt=""
            />
          </figure>
        )}
        <div className={"card-body flex-col items-center"}>
          <div className={`avatar -mt-16`}>
            <div className="rounded-full outline outline-4 outline-primary w-24">
              {loading ? (
                <div className="w-full h-full bg-accent"></div>
              ) : (
                <img src={profile?.avatar} alt="" />
              )}
            </div>
          </div>
          {loading ? (
            <div className="h-2.5 bg-accent rounded-full  w-48 mb-4"></div>
          ) : (
            <div className="text-xl font-bold flex-col gap-2 flex">
              <span className={"text-center"}>{profile?.username}</span>
              {user?.id != profile?.id ? (
                <button
                  className={"btn-sm btn-accent rounded-xl"}
                  onClick={add_friend}
                >
                  {isFriend ? "Удалить из друзей" : "Добавить в друзья"}
                </button>
              ) : null}
              <label htmlFor="my-modal" className="btn-sm btn-accent rounded-xl text-center">Подробнее</label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal z-20">
  <div className="modal-box bg-primary">
    <div className={"flex flex-col gap-2"}>
      <TextWrapper>О себе: {profile?.bio}</TextWrapper>
      <TextWrapper>Город: {profile?.city}</TextWrapper>
      <TextWrapper>День рождения: {profile?.birthday}</TextWrapper>
    </div>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">О как!</label>
    </div>
  </div>
</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <ResponseGrid orientation={"list"} className={"w-2/3 mr-5"}>
          {user?.id == profile?.id ? <AddPostPanel /> : null}
          {posts?.map((post: IPost) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ResponseGrid>
        <div className="w-1/3 h-full">
          {friends?.length === 0 ? (
            <TextWrapper>У этого пользователя пока нет друзей.</TextWrapper>
          ) : (
            <ResponseGrid
              orientation={"list"}
              className={
                "w-full bg-primary rounded-xl outline outline-1 outline-accent"
              }
            >
              <TextWrapper>Друзья</TextWrapper>
              {friends?.map((friend: IUser) => (
                <UserCard user={friend} key={friend.id} />
              ))}
            </ResponseGrid>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
