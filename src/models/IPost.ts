import { IUser } from "./IUser.ts";

export interface IPost {
  id: string;
  body: string;
  cover: string;
  liked: boolean;
  likes_count: number;
  author: IUser;
  created: string;
}

export interface IPostList extends Array<IPost> {}

export interface IPostProps {
  post: IPost;
}
