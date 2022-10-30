import React from "react";

import "./HomePage.css";

import Header from "./../../Header";
import PostList from "./../../PostList";
import testPhoto from "./../../../assets/photo/test.jpg";
import testAvatar from "./../../../assets/users/test-logo2.jpg";
import TestLastPost from "./../../../assets/photo/test-last-post.jpg";

import { PostInterface, UserInterface } from "../../../types/types";
import Footer from "../../Footer";
import LastPost from "../../LastPost";

const HomePage:React.FC = () => {
  const posts: PostInterface[] = [
    {image: testPhoto, title: 'Хепоярви', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 2, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви2', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 5, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: TestLastPost, title: 'Хепоярви3', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 4, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 2, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви2', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 5, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: TestLastPost, title: 'Хепоярви3', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 4, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}}
  ];

  const lastPost = posts[posts.length - 1];

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Последние публикации</h1>
        <p>Ребятули, это наш собственный блог, где мы делимся поездками, местами,
          рецептами и эмоциями друг с другом, как некий архив
        </p>
      </div>
      <LastPost post={lastPost}/>
      <PostList items={posts.reverse()}/>
      <Footer />
    </div>
  )
}

export default HomePage;
