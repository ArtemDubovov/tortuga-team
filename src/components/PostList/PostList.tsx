import React from 'react';

import './PostList.css';

import Post from '../Post/Post';

import { Post as PostInterface } from './../../types/types';

interface PostListProps {
  items: PostInterface[]
}

const PostList: React.FC<PostListProps> = ({items}) => {
  console.log(items);
  return (
    <div className='container'>
      <h2>Смотрите свежие публикации</h2>
      <div className='posts-list'>
        {items.map(item =>
          <Post post={item} key={item.title}/>
        )}
      </div>
    </div>
  );
};

export default PostList;
