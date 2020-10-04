import React from 'react';
import './PacksTable.scss';
import PackItem from '../PacksItem/PackItem';

const PacksTable = ({ list, onPurchaseItem }) => {
  const items = list.map(item => {
    const { id, title, stars, price, isPurchased, emoji: imgs } = item;

    return (
      <PackItem
        key={id}
        title={title}
        stars={stars}
        isPurchased={isPurchased}
        price={price}
        imgs={imgs}
        onPurchaseItem={() => onPurchaseItem(id)}
      />
    );
  });

  return <ul className='packs__list'>{items}</ul>;
};

export default PacksTable;
