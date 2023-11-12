import React, { Component } from 'react';
import './style.css';

class ErrorThrowerButton extends Component {
  handleClick = () => {
    throw new Error('Error throw button push');
  };

  render() {
    return (
      <button className={'error_button'} onClick={this.handleClick}>
        Throw error
      </button>
    );
  }
}

export default ErrorThrowerButton;
