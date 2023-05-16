import { ICard } from './ICard';

export default interface IBoard_id {
  [x: string]: any;
  title: string;
  users: {
    id: number;
    username: string;
  };
  lists: { id: number; title: string; position: number; cards: ICard[] }[];
}
