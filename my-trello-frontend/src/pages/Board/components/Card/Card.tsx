import React from 'react';
import './card.scss';
import { ICard } from '../../../../common/interfaces/ICard';

export default function Card({ title, id }: ICard) {
  return (
    <div>
      <p>{title}!</p>
    </div>
  );
}
