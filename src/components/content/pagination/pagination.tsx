import React from 'react';
import './style.css';

interface IPagination {
  pagesArray: number[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  pagesArray,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className={'pagination__wrapper'}>
      {pagesArray.map((e) => (
        <div
          key={e}
          onClick={() => {
            setCurrentPage(e);
          }}
          className={
            currentPage === e
              ? 'pagination_button pagination_button_active'
              : 'pagination_button'
          }
        >
          {e}
        </div>
      ))}
    </div>
  );
};
export default Pagination;
