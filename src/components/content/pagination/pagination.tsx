import { Component } from 'react';
import SearchButton from "../../search_block/buttons/searchButton/searchButton";
interface IPagination {
    pageCount: number;
    totalCount: number;


}
export default class Pagination extends Component {
  render() {
    return (
      <div className={"pagination__wrapper"}>

      </div>
    );
  }
}
