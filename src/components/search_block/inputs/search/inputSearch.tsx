import React, { Component } from 'react';
import './style.css';

interface InputSearchState {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class InputSearch extends Component<InputSearchState> {
  render() {
    const { searchValue, onChange } = this.props;
    return (
      <input
        type="text"
        placeholder="Search"
        className="input_search"
        value={searchValue}
        onChange={onChange}
      />
    );
  }
}
