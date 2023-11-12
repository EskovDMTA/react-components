import { Component } from 'react';
import './style.css';

interface IPost {
  name: string;
  description: string;
}

export default class Post extends Component<IPost> {
  render() {
    const { name, description } = this.props;
    return (
      <div className={'post_wrapper'}>
        <div className={'post_title'}>Name: {name}</div>
        <div className={'post_description'}>Date: {description}</div>
      </div>
    );
  }
}
