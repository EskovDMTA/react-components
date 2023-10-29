import './App.css';
import Content from './components/content/content';
import SearchBlock from './components/search_block/SearchBlock';
import React, { Component } from 'react';
import ApiService from './helpers/Api/api_service';
import { getPagesArray, setPagesCount } from './helpers/pages';

interface IApp {
  handleInputChange: () => void;
}

export default class App extends Component<IApp> {
  state = {
    searchValue: localStorage.getItem('lastSearchValue') || 'people',
    posts: [],
    isLoading: false,
    totalPostsCount: 0,
    totalPagesCount: 0,
    limit: 10,
    currentPage: 1,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value;
    this.setState({
      searchValue,
    });
    localStorage.setItem('lastSearchValue', searchValue);
  };

  postsHandler = (posts: []): void => {
    this.setState({
      posts,
    });
  };

  // currentPageHandler = (page: number) => {
  //   this.setState({
  //     currentPage: page
  //   })
  // }

  // totalPostsCountHandler = (count: number) => {
  //   this.setState({
  //     totalPostsCount: count
  //   })
  // }

  totalPagesCountHandler = (count: number, limit: number): void => {
    this.setState({
      totalPagesCount: setPagesCount(count, limit),
    });
  };

  isLoadingHandler = (isLoading: boolean): void => {
    this.setState({ isLoading });
  };

  setCurrentPage = async (currentPage: number) => {
    this.isLoadingHandler(true);
    this.setState({ currentPage });
    const response = await ApiService.getPage(
      this.state.searchValue,
      this.state.limit,
      currentPage
    );
    console.log(response.data);
    this.postsHandler(response.data.results);
    localStorage.setItem('lastSearchPage', currentPage.toString());
    this.totalPagesCountHandler(response.data.count, this.state.limit);
    this.isLoadingHandler(false);
  };

  fetchPostsHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.isLoadingHandler(true);
    const response = await ApiService.response(this.state.searchValue);
    this.postsHandler(response.data.results);
    console.log(response);
    this.totalPagesCountHandler(response.data.count, this.state.limit);
    this.isLoadingHandler(false);
  };

  componentDidMount() {
    const lastSearchValue = localStorage.getItem('lastSearchValue');
    if (lastSearchValue) {
      this.setState({ searchValue: lastSearchValue });
    }
    this.setCurrentPage(this.state.currentPage);
  }

  render() {
    const pagesArray = getPagesArray(this.state.totalPagesCount);
    return (
      <div className={''}>
        <SearchBlock
          searchValue={this.state.searchValue}
          handleInputChange={this.handleInputChange}
          fetchPostsHandler={this.fetchPostsHandler}
        />
        <Content
          isLoading={this.state.isLoading}
          posts={this.state.posts}
          pagesTotalCount={this.state.totalPagesCount}
          pagesArray={pagesArray}
          currentPage={this.state.currentPage}
          setCurrentPage={this.setCurrentPage}
        />
      </div>
    );
  }
}
