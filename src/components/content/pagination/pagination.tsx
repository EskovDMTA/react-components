import { Component } from 'react';
import './style.css';

interface IPagination {
  pagesArray: number[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export default class Pagination extends Component<IPagination> {
  render() {
    return (
      <div className={'pagination__wrapper'}>
        {this.props.pagesArray.map((e) => (
          <div
            key={e}
            onClick={() => this.props.setCurrentPage(e)}
            className={
              this.props.currentPage === e
                ? 'pagination_button pagination_button_active'
                : 'pagination_button'
            }
          >
            {e}
          </div>
        ))}
      </div>
    );
  }
}
