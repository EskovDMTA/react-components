import React from 'react';
import SearchButton from '../buttons/searchButton/searchButton';
import InputSearch from '../inputs/search/inputSearch';
import './style.css';
import ApiUrl from '../api_url/api_url';

interface SearchFormsInterface {
  searchValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPostsHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForms: React.FC<SearchFormsInterface> = ({
  searchValue,
  fetchPostsHandler,
  handleInputChange,
}) => {
  return (
    <form
      className="form_search"
      onSubmit={(e) => {
        fetchPostsHandler(e);
      }}
    >
      <ApiUrl />
      <InputSearch searchValue={searchValue} onChange={handleInputChange} />
      <SearchButton />
    </form>
  );
};

export default SearchForms;
