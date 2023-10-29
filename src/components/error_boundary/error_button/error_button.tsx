import React, { Component } from 'react';
import './style.css';

class ErrorThrowerButton extends Component {
  handleClick = () => {
    throw new Error('Ошибка, вызванная нажатием кнопки');
  };

  render() {
    return (
      <button className={'error_button'} onClick={this.handleClick}>
        Вызвать ошибку
      </button>
    );
  }
}

export default ErrorThrowerButton;
