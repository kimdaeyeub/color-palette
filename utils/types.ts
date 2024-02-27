export interface IUser {
  email: string;
  id: string;
  name: string;
  image: string;
}

interface ICreator {
  _id: string;
  email: string;
  username: string;
  image: string;
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
