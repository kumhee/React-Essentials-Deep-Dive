import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  // 버튼이 하나 선택될 때 실행 (GameBoard.jsx 내부에서 실행하기 위한 함수)
  function handleSelectSquare(rowIndex, colIndex) {
    // (curActivePlayer -> 현재 진행중인 player) // 게임 보드에서 어떤 버튼이 선택될 때 호출됨. 현재 활성 플레이어를 'X'에서 'O'로, 또는 'O'에서 'X'로 토글
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      // prevTurn에  저장된 가장 최신의 차례 정보에 따라 설정
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
