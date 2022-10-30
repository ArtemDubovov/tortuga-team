import React from 'react';

import './Post.css';

import { PostInterface } from '../../types/types';
import {ButtonStatus} from './../UI/Buttons/ButtonInter/ButtonInter';
import ButtonInter from './../UI/Buttons/ButtonInter';

interface PostProps {
  post: PostInterface;
}

function getRating(rate: number) {
  const ratingList = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      ratingList.push({value: i, checked: true});
    } else {
      ratingList.push({value: i, checked: false});
    }
  }

  return ratingList;
}

const Post: React.FC<PostProps> = ({post}) => {
  const rateList = getRating(post.rating);
  console.log(rateList);
  return (
    <div className='post'>
      <div className='post__image-wrapper'>
        <img className='post__image' src={post.image} alt='post'/>
      </div>
      <h6 className='post__type'>{post.type}</h6>
      <h2 className='post__title'>{post.title}</h2>
      <p className='post__subtitle'>{post.subtitle}</p>
      <div className='post__rating-wrapper'>
        <p className='post__rating-title'>Рейтинг:</p>
        <ul className='post__rate-list'>
          {rateList.map(rate =>
            <li className='post__rate-item' key={rate.value}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill={rate.checked ? '#FFB800' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M7.73659 1.05875C7.81954 0.803449 8.18072 0.803449 8.26368 1.05875L9.64868 5.32134C9.789 5.75322 10.1915 6.04562 10.6456 6.04562H15.1275C15.396 6.04562 15.5076 6.38913 15.2904 6.54692L11.6644 9.18134C11.297 9.44826 11.1433 9.92138 11.2836 10.3533L12.6686 14.6158C12.7516 14.8711 12.4594 15.0834 12.2422 14.9257L8.61624 12.2912C8.24887 12.0243 7.7514 12.0243 7.38402 12.2912L3.75805 14.9257C3.54087 15.0834 3.24867 14.8711 3.33162 14.6158L4.71662 10.3533C4.85694 9.92138 4.70322 9.44826 4.33584 9.18134L0.709867 6.54692C0.492692 6.38913 0.604305 6.04562 0.872746 6.04562H5.3547C5.8088 6.04562 6.21126 5.75322 6.35159 5.32134L7.73659 1.05875Z"
                 stroke="#FFB800" strokeWidth="0.771085"/>
              </svg>
            </li>
          )}
        </ul>
      </div>
      <div className='post__users'>
        <ul className='post__users-list'>
          {post.users.map(user =>
            <li className='post__users-item' key={user.email}>
              <img src={user.image} alt={user.name}/>
            </li>
          )}
        </ul>
      </div>
      <div className='post__buttons-wrapper'>
        <ButtonInter status={ButtonStatus.ColorDark} Content='Читать публикацию'/>
        <ButtonInter status={ButtonStatus.ColorLight} Content='Добавить в избранное'/>
      </div>
    </div>
  );
};

export default Post;
