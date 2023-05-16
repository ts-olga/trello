import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BoardProps, IBoard } from '../../../../common/interfaces/IBoard';
import './board.scss';

export default function Board(props: any) {
  const [boardData, setBoardData] = useState<BoardProps | null>(null);

  useEffect(() => {
    axios
      .get(`https://trello-back.shpp.me/otsyrulyk/api/v1/board`, {
        headers: {
          Authorization: `Bearer 123`,
        },
      })
      .then((response: AxiosResponse<BoardProps>) => setBoardData(response.data))
      .catch((error) => console.log(error));
  }, [boardData]);
  // console.log(boardData);

  if (!boardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Board">
      {boardData.boards.map((key, index) => (
        <Link to={`/board/${index + 1}`} key={key.id}>
          <div className="Board-title" style={{ backgroundColor: `${key.custom.color}` }}>
            <p>{key.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

//   axios
//     .put(
//       `https://trello-back.shpp.me/otsyrulyk/api/v1/board/
// 1678274349180`,
//       {
//         title: 'shopping list',
//         custom: {
//           description: 'buy food',
//           color: 'purple',
//         },
//       },

//       {
//         headers: {
//           Authorization: `Bearer 123`,
//         },
//       }
//     )
//     .then()
//     .catch((error) => console.log(error));

// const board = {
//   boards: [
//     { id: 1, title: 'покупки', custom: { background: 'red' } },
//     { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
//     { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
//     { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
//   ],
// };

// const [state, setState] = useState(board);
//   return (
//     <div className="Board">
//       {state.boards.map((key) => (
//         <Link to={`/board/${key.id}`} key={key.id}>
//           <div className="Board-title" style={{ backgroundColor: `${key.custom.background}` }}>
//             <p>{key.title}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
