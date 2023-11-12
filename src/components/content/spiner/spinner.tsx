import { Component } from 'react';
import './style.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className={'spinner_wrapper'}>
        <div className={'spinner'}></div>
      </div>
    );
  }
}
