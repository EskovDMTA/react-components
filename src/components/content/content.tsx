import React, { Component } from 'react';
import Pagination from './pagination/pagination';
import Post from './post/post';
import Spinner from './spiner/spinner';
import './style.css';
import GiphyComponent from './giphy_component/giphyStarWars';

interface IPost {
  name: string;
  created: string;
}

interface IContent {
  posts: IPost[];
  isLoading: boolean;
  pagesTotalCount: number;
  pagesArray: number[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export default class Content extends Component<IContent> {
  render() {
    return (
      <div className={'content_wrapper'}>
        <GiphyComponent />
        {this.props.isLoading ? (
          <Spinner />
        ) : this.props.posts.length === 0 ? (
          <h3>Список постов пуст, воспользуйтесь поиском</h3>
        ) : (
          <React.Fragment>
            {this.props.posts.map((post, index) => (
              <Post key={index} name={post.name} description={post.created} />
            ))}
            <Pagination
              setCurrentPage={this.props.setCurrentPage}
              currentPage={this.props.currentPage}
              pagesArray={this.props.pagesArray}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
