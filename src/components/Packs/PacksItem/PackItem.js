import React, { Component } from 'react';
import './PackItem.scss';
import Button from '../../Button/Button';
import StarIcons from './Stars/Stars';

export default class PackItem extends Component {
  render() {
    const { title, stars, price, imgs, isPurchased, onPurchaseItem, id } = this.props;

    const images = imgs
      .filter((img, i) => i <= 2)
      .map((img, i) => {
        return (
          <div key={i} className='item__img'>
            {img['char']}
          </div>
        );
      });

    return (
      <li className='pack__list-item'>
        <div className='item__imgs-wrapper'>{images}</div>
        <h2 className='item__title'>{title}</h2>
        <div className='item__stars'>
          <StarIcons starsNumber={stars} />
        </div>
        <Button
          onPurchaseItem={() => onPurchaseItem(id)}
          className='item__btn'
          price={price}
          type={'Get'}
          isActive={isPurchased}
        />
      </li>
    );
  }
}
