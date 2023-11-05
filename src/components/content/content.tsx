import React from 'react';
import Pagination from './pagination/pagination';
import Post from './post/post';
import Spinner from './spiner/spinner';
import './style.css';

interface IPost {
  name: string;
  created: string;
}

interface IContent {
  posts: IPost[];
  isLoading: boolean;
  pagesArray: number[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Content: React.FC<IContent> = ({
  posts,
  isLoading,
  pagesArray,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className={'content_wrapper'}>
      {isLoading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h3>Список постов пуст, воспользуйтесь поиском</h3>
      ) : (
        <React.Fragment>
          {posts.map((post, index) => (
            <Post key={index} name={post.name} description={post.created} />
          ))}
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pagesArray={pagesArray}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default Content;
