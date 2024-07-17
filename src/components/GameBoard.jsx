const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]; // 이전 게임 보드를 복사하여 새로운 배열 생성
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // prevGameBoard에서 rowIndex와 colIndex에 해당하는 위치를 'X'로 설정
  //     return updatedBoard; //변경된 prevGameBoard를 반환
  //   });
  //
  //   onSelectSquare(); // 'onSelectSquare' 함수를 호출해 턴 변경
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}> {playerSymbol} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
