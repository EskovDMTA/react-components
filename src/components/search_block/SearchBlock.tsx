import React, { Component } from 'react';
import SearchForms from './forms/searchForms';
import './style.css';
import AboutApi from './about_api/about_api';

interface SearchBlockInterface {
  searchValue: string;
  postsHandlerChange: (posts) => void;
  isLoadingHandler: (value: boolean) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPostsHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default class SearchBlock extends Component<SearchBlockInterface> {
  render() {
    const {
      fetchPostsHandler,
      searchValue,
      handleInputChange,
      postsHandlerChange,
    } = this.props;
    return (
      <div className="search_block">
        <SearchForms
          searchValue={searchValue}
          postsHandlerChange={postsHandlerChange}
          handleInputChange={handleInputChange}
          fetchPostsHandler={fetchPostsHandler}
        />
        <AboutApi />
      </div>
    );
  }
}
