import React from 'react';
import './style.css';

interface InputSearchState {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: React.FC<InputSearchState> = ({ searchValue, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="input_search"
      value={searchValue}
      onChange={onChange}
    />
  );
};
export default InputSearch;
