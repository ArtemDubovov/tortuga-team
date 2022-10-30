import React from "react";

import "./HomePage.css";

import Header from "./../../Header";
import PostList from "./../../PostList";
import testPhoto from "./../../../assets/photo/test.jpg";
import testAvatar from "./../../../assets/users/test-logo2.jpg"

import { Post, User } from "../../../types/types";
import Footer from "../../Footer";

const HomePage:React.FC = () => {
  const posts: Post[] = [
    {image: testPhoto, title: 'Хепоярви', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 3, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви2', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 3, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви2', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 3, type: 'Поездка за город', users: [
      {name: 'Artem1', image: testAvatar, age: 19, email: ''},
      {name: 'Artem2', image: testAvatar, age: 19, email: ''},
      {name: 'Artem3', image: testAvatar, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}}
  ]
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Последние публикации</h1>
        <p>Ребятули, это наш собственный блог, где мы делимся поездками, местами,
          рецептами и эмоциями друг с другом, как некий архив
        </p>
      </div>
      <PostList items={posts}/>
      <Footer />
    </div>
  )
}

export default HomePage;
