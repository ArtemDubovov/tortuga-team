import React from "react";

import "./HomePage.css";

import Header from "../../components/Header";
import PostList from "../../components/PostList";
import testPhoto from "./../../assets/photo/test.jpg";
import testAvatar from "./../../assets/users/test-logo2.jpg";
import TestLastPost from "./../../assets/photo/test-last-post.jpg";
import ladogaImage from './../../assets/photo/ladoga.jpg';
import klukvaImage from './../../assets/photo/klukva.jpg';
import lemonImage from './../../assets/photo/lemon.jpg';
import teaImage from './../../assets/photo/tea.jpg';
import teamImage from './../../assets/photo/team.jpg';
import tomjam from './../../assets/photo/tomjam.jpg';

import alsu from './../../assets/users/alsu.png';
import artem from './../../assets/users/artem.png';
import maks from './../../assets/users/maks.png';
import marina from './../../assets/users/marina.png';
import syoma from './../../assets/users/syoma.png';
import vanja from './../../assets/users/vanja.png';
import yulia from './../../assets/users/yulia.png';

import { PostInterface, UserInterface } from "../../types/types";
import Footer from "../../components/Footer";
import LastPost from "../../components/LastPost";

const HomePage:React.FC = () => {
  const posts: PostInterface[] = [
    {image: lemonImage, title: 'Ястребиное', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 5, type: 'Поездка за город', users: [
      {name: 'Artem1', image: maks, age: 19, email: ''},
      {name: 'Artem2', image: artem, age: 19, email: ''},
      {name: 'Artem3', image: syoma, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: teamImage, title: 'Вуокса', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 3, type: 'Поездка за город', users: [
      {name: 'Artem1', image: maks, age: 19, email: ''},
      {name: 'Artem2', image: artem, age: 19, email: ''},
      {name: 'Artem3', image: syoma, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: teaImage, title: 'Кавголово', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 1, type: 'Поездка за город', users: [
      {name: 'Artem1', image: vanja, age: 19, email: ''},
      {name: 'Artem2', image: artem, age: 19, email: ''},
      {name: 'Artem3', image: syoma, age: 19, email: ''},
      {name: 'Artem3', image: marina, age: 19, email: ''},
      {name: 'Artem3', image: alsu, age: 19, email: ''},
      {name: 'Artem3', image: yulia, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: testPhoto, title: 'Хепоярви', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 2, type: 'Поездка за город', users: [
      {name: 'Artem1', image: maks, age: 19, email: ''},
      {name: 'Artem2', image: artem, age: 19, email: ''},
      {name: 'Artem3', image: syoma, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: tomjam, title: 'Том-Ям', subtitle: 'Вкуснющий рецепт из ингридентов, которые хрен достанешь в обычном магазине, но если постараться, то будет ну очень вкусно!',
    rating: 5, type: 'Рецепт', users: [
      {name: 'Artem1', image: artem, age: 19, email: ''},
      {name: 'Artem2', image: syoma, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
    {image: ladogaImage, title: 'Ладога', subtitle: 'Вы чё мартышки? Ваня подвернул ногу, а этот алкаш чуть не утоппил нас на лодке. Сколько заправить? Литр, 2, 5, можно 10, ну 20 хватит.',
    rating: 5, type: 'Поездка за город', users: [
      {name: 'Artem1', image: vanja, age: 19, email: ''},
      {name: 'Artem2', image: artem, age: 19, email: ''},
      {name: 'Artem3', image: syoma, age: 19, email: ''},
      {name: 'Artem3', image: marina, age: 19, email: ''},
      {name: 'Artem3', image: alsu, age: 19, email: ''},
    ], author: {name: '', image: '', age: 18, email: ''}},
  ];

  const lastPost = posts[posts.length - 1];

  return (
    <div className="home-page">
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
