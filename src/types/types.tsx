export interface UserInterface {
  name: string;
  image: string;
  age: number;
  email: string;
}

export interface PostInterface {
  image: string;
  title: string;
  subtitle: string;
  rating: number;
  type: string;
  users: UserInterface[];
  author: UserInterface;
}