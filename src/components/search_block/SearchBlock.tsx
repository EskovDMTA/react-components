import React, { Component } from 'react';
import SearchForms from './forms/searchForms';
import './style.css';
import AboutApi from './aboutApi/about_api';

interface SearchBlockInterface {
    postsHandlerChange: (posts) => void;
    isLoadingHandler: (value:boolean) => void;
}

export default class SearchBlock extends Component<SearchBlockInterface> {
  render() {
      const {postsHandlerChange} = this.props
      const {isLoadingHandler} = this.props
    return (
      <div className='search_block'>
        <SearchForms isLoadingHandler={isLoadingHandler} postsHandlerChange={postsHandlerChange}/>
        <AboutApi />
      </div>
    );
  }
}
