export interface IUser {
  id: string;
  username: string;
  avatar: string;
  bio: string;
  city: string;
  birthday: string;
  isFriend: boolean
}

export type IUserList = Array<IUser>;

export interface IUserProps {
  user: IUser | undefined;
}
