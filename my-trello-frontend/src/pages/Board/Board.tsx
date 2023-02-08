import React from 'react';
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
      // {
      //   id: 2,
      //   title: 'В процессе',
      //   cards: [{ id: 4, title: 'посмотреть сериал' }],
      // },
      // {
      //   id: 3,
      //   title: 'Сделано',
      //   cards: [
      //     { id: 5, title: 'сделать домашку' },
      //     { id: 6, title: 'погулять с собакой' },
      //   ],
      // },
      // {
      //   id: 3,
      //   title: 'Сделано',
      //   cards: [
      //     { id: 5, title: 'сделать домашку' },
      //     { id: 6, title: 'погулять с собакой' },
      //   ],
      // },
    ],
  };

  return (
    <div>
      <div className="board-title">
        <button className="homeBtn">Домой</button>
        <div className="wrapper">
          <h1>{board.title}</h1>
        </div>
      </div>
      <div className="board">
        {board.lists.map((key) => (
          <List id={key.id} title={key.title} cards={key.cards} key={key.id} />
        ))}
      </div>
    </div>
  );
}
