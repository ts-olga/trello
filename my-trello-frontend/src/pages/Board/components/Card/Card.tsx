import React from 'react';
import './card.scss';
import { ICard } from '../../../../common/interfaces/ICard';

export default function Card({ title, id }: ICard) {
  return <p>{title}!</p>;
}
