import { IList } from './IList';
import { ICard } from './ICard';

export interface IBoard {
  id: number;
  title: string;
  lists?: IList[];
}

export interface BoardProps {
  board: {
    title: string;
    lists: IList[];
  };
}
export interface CardsProps {
  board: {
    title: string;
    lists: [
      IList: {
        cards: [
          ICard: {
            position: number;
            // id: number;
            // title: string;
          }
        ];
      }
    ];
  };
}
