export interface User {
  name: string;
  image: string;
  age: number;
  email: string;
}

export interface Post {
  image: string;
  title: string;
  subtitle: string;
  rating: number;
  type: string;
  users: User[];
  author: User;
}