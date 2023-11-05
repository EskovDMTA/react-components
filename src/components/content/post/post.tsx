import React from 'react';
import './style.css';

interface IPost {
  name: string;
  description: string;
}

const Post: React.FC<IPost> = ({ name, description }) => {
  return (
    <div className={'post_wrapper'}>
      <div className={'post_title'}>Name: {name}</div>
      <div className={'post_description'}>Date: {description}</div>
    </div>
  );
};
export default Post;
