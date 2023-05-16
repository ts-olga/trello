import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './board.scss';
import List from './components/List/List';

export default function Board() {
  const board = {
    title: 'Моя тестовая доска',
    lists: [
      {
        id: 1,
        title: 'Планы',
        cards: [
          { id: 1, title: 'помыть кота' },
          { id: 2, title: 'приготовить суп' },
          { id: 3, title: 'сходить в магазин' },
        ],
      },
      {
        id: 2,
        title: 'В процессе',
        cards: [{ id: 4, title: 'посмотреть сериал' }],
      },
      {
        id: 3,
        title: 'Сделано',
        cards: [
          { id: 5, title: 'сделать домашку' },
          { id: 6, title: 'погулять с собакой' },
        ],
      },
    ],
  };

  const [state, setState] = useState(board);
  const { board_id } = useParams(); // eslint-disable-line @typescript-eslint/naming-convention

  return (
    <div>
      <div className="board-title">
        <Link to="/">
          <button className="homeBtn">Домой</button>
        </Link>
        <div className="wrapper">
          <h1>{state.title}</h1>
        </div>
      </div>
      <div className="board">
        {state.lists.map((key) => {
          if (key.id === Number(board_id)) {
            return <List id={key.id} board_id={board_id} title={key.title} cards={key.cards} key={key.id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

// (
//   <List id={key.id} board_id={board_id} title={key.title} cards={key.cards} key={key.id} />
// )
