import React from 'react';

import { PostInterface } from './../../types/types';

import './LastPost.css';

interface LastPostProps {
  post: PostInterface;
}

const LastPost: React.FC<LastPostProps> = ({post}) => {
  return (
    <div className='container last-post'>
      <div className='last-post__wrapper' style={{backgroundImage: `url(${post.image})`}}>
        <div className='last-post__content'>
          <p className='last-post__subtitle'>{post.type}</p>
          <h1 className='last-post__title'>{post.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default LastPost;
