export interface IUser {
  email: string;
  _id: string;
  username: string;
  image: string;
  description: string;
}

interface ICreator {
  _id: string;
  email: string;
  username: string;
  image: string;
  description: string;
}

export interface IPalette {
  colors: string[];
  _id: string;
  description: string;
  title: string;
  likes: number;
  creator: ICreator;
  theme: string;
  grid: number;
}
