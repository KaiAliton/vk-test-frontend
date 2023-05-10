import { useContext, useEffect, useState } from "react";
import { IUser, IUserList } from "../models/IUser.ts";
import useAxios from "../utils/useAxios.ts";
import ResponseGrid from "../layouts/ResponseGrid.tsx";
import AppContext from "../utils/AppContext.tsx";
import { FriendCard } from "../components/FriendCard.tsx";
import SearchField from "../components/SearchField.tsx";

export default function FriendList() {
  const [friends, setFriends] = useState<IUserList | undefined>(undefined);
  const { user } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const api = useAxios();
  useEffect(() => {
    api.get(`/api/v1/user/${user?.id}/friends/`).then((res) => {
      setFriends(res.data);
    });
  }, []);

  const handleSearch = async (e:any) => {
    setSearchQuery(e.target.value);
    api.get(`/api/v1/user/?search=${e.target.value}`).then((res) => {
      setFriends(res.data.results);
    })}


  return (
    <>
    <SearchField value={searchQuery} handleSearch={handleSearch}/>
    <ResponseGrid orientation={"list"} className=" bg-primary rounded-2xl mt-5">
      {friends?.map((friend: IUser) => (
        <FriendCard user={friend} key={friend.id} />
      ))}
    </ResponseGrid>
    </>
  );
}
