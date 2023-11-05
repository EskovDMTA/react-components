import React from 'react';
import './style.css';

const Spinner: React.FC = () => {
  return (
    <div className={'spinner_wrapper'}>
      <div className={'spinner'}></div>
    </div>
  );
};
export default Spinner;
