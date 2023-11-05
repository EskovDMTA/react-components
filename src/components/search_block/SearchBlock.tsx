import React from 'react';
import SearchForms from './forms/searchForms';
import './style.css';
import AboutApi from './about_api/about_api';

interface SearchBlockInterface {
  searchValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchPostsHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBlock: React.FC<SearchBlockInterface> = ({
  fetchPostsHandler,
  searchValue,
  handleInputChange,
}) => {
  return (
    <div className="search_block">
      <SearchForms
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        fetchPostsHandler={fetchPostsHandler}
      />
      <AboutApi />
    </div>
  );
};
export default SearchBlock;
