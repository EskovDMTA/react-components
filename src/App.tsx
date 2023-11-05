import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './components/content/content';
import SearchBlock from './components/search_block/SearchBlock';
import ApiService from './helpers/Api/api_service';
import { getPagesArray, setPagesCount } from './helpers/pages';
import ErrorBoundary from './components/error_boundary/error_boundary';
import ErrorThrowerButton from './components/error_boundary/error_button/error_button';

const App = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('lastSearchValue') || 'people'
  );
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);



  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSearchValue(value);
    localStorage.setItem('lastSearchValue', value);
  };

  const postsHandler = (posts) => {
    setPosts(posts);
  };

  const totalPagesCountHandler = (count, limit) => {
    setTotalPagesCount(setPagesCount(count, limit));
  };

  const setCurrentPageHandler = async (page) => {
    setIsLoading(true);
    setCurrentPage(page);
    const response = await ApiService.getPage(searchValue, limit, page);
    postsHandler(response.data.results);
    localStorage.setItem('lastSearchPage', page.toString());
    totalPagesCountHandler(response.data.count, limit);
    setIsLoading(false);
  };

  const fetchPostsHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await ApiService.response(searchValue);
    postsHandler(response.data.results);
    totalPagesCountHandler(response.data.count, limit);
    setIsLoading(false);
  };

  useEffect(() => {
    const lastSearchValue = localStorage.getItem('lastSearchValue');
    if (lastSearchValue) {
      setSearchValue(lastSearchValue);
    }
    setCurrentPageHandler(currentPage);
  }, [currentPage]);

  const pagesArray = getPagesArray(totalPagesCount);

  return (
    <div className={''}>
      <ErrorBoundary>
        <SearchBlock
          searchValue={searchValue}
          handleInputChange={handleInputChange}
          fetchPostsHandler={fetchPostsHandler}
        />
        <ErrorThrowerButton />
        <Content
          isLoading={isLoading}
          posts={posts}
          pagesArray={pagesArray}
          currentPage={currentPage}
          setCurrentPage={setCurrentPageHandler}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
