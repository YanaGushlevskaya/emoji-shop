import React from 'react';
import './Stars.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarIcons = ({ starsNumber }) => {
  const starIcons = [];
  let count = 0;

  while (count < starsNumber) {
    starIcons.push(
      <span key={count} className='item__star-icon'>
        <FontAwesomeIcon icon='star' />
      </span>
    );
    count++;
  }

  return starIcons;
};

export default StarIcons;
