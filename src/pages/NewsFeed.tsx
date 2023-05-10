import { useContext, useEffect, useState } from "react";
import { IPost, IPostList } from "../models/IPost.ts"
import { PostCard } from "../components/PostCard.tsx";
import ResponseGrid from "../layouts/ResponseGrid.tsx";
import TextWrapper from "../components/TextWrapper.tsx";
import useAxios from "../utils/useAxios.ts";
import AppContext from "../utils/AppContext.tsx";
import AddPostPanel from "../components/AddPostPanel.tsx";

export default function NewsFeed() {
  const api = useAxios();
  const { user } = useContext(AppContext);
  const [posts, setPosts] = useState<IPostList | undefined>(undefined);
  useEffect(() => {
    api.get(`/api/v1/user/${user?.id}/newsfeed/`).then((res) => {
      setPosts(res.data.results);
    });
  }, []);
  console.log(posts);

  return (
    <div className="mt-5">
      <AddPostPanel />
      {posts?.length == 0 ? (
        <TextWrapper className={""}>
          Здесь пока ничего нет, попробуйте добавить пост или найти друзей!
        </TextWrapper>
      ) : (
        <ResponseGrid orientation={"list"} className="">
          {posts?.map((post: IPost) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ResponseGrid>
      )}
    </div>
  );
}
