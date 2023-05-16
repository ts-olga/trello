import { ICard } from './ICard';

export interface IList {
  id: number;
  board_id: number | string | undefined; //aded
  title: string;
  cards: ICard[];
}
