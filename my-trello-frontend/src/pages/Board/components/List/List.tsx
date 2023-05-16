import React from 'react';
import { IList } from '../../../../common/interfaces/IList';
import Card from '../Card/Card';
import './list.scss';

export default function List({ id, title, cards, board_id }: IList) {
  return (
    <div className="List">
      <h2>
        {title}
        {id}
      </h2>
      <div className="card-conent">
        {cards.map((key) => (
          <Card title={key.title} key={key.id} id={key.id} />
        ))}{' '}
      </div>
      <button>Добавить карточку</button>
    </div>
  );
}
