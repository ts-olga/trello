import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Board from './components/Board/Board';
import './home.scss';
import { BoardProps } from '../../common/interfaces/IBoard';
import instance from '../../api/request';

function Home() {
  return (
    <div>
      <h1>Мои доски</h1>
      <Board />
      <div className="Board-title" style={{ backgroundColor: '#96959578' }}>
        <p>+ создать доску</p>{' '}
      </div>
    </div>
  );
}

export default Home;

// function Home() {
//   return (
//     <div className="Home">
//       <div>
//         <h1>Мои доски</h1>
//       </div>
//       <Board />
//     </div>
//   );
// }

// const mapStateToProps = (state: stateType) => ({
//   ...state.boards,
// });
// export default connect(mapStateToProps, {})(Home);
