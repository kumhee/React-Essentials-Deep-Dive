import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // 입력값이 변경될 때 playerName 상태 업데이트
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>;

  // isEditing이 true라면 입력 필드로 표시
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? 'Save' : 'Edit'} </button>
    </li>
  );
}
