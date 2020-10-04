import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {

  render() {
    const { isActive, price, type, onPurchaseItem, onCleanBasket } = this.props;

    const className = isActive ? 'btn-secondary' : 'btn-primary';

    return (
      <div className={`btn ${className}`} onClick={type === 'Get' ? onPurchaseItem : onCleanBasket}>
        <span>{type} ({price}$)</span>
      </div>
    );
  }
}
