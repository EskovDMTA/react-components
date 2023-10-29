import React, { Component } from 'react';
import SearchButton from '../buttons/searchButton/searchButton';
import InputSearch from '../inputs/search/inputSearch';
import './style.css';
import ApiUrl from '../api_url/api_url';

interface SearchFormsInterface {
  searchValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPostsHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default class SearchForms extends Component<SearchFormsInterface> {
  render() {
    const { searchValue, fetchPostsHandler, handleInputChange } = this.props;
    return (
      <form className="form_search" onSubmit={(e) => fetchPostsHandler(e)}>
        <ApiUrl />
        <InputSearch searchValue={searchValue} onChange={handleInputChange} />
        <SearchButton />
      </form>
    );
  }
}
